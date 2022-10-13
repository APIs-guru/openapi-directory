package operations

import (
	"openapi/pkg/models/shared"
)

type ReferencesCitiesByCityCodeGetPathParams struct {
	CityCode string `pathParam:"style=simple,explode=false,name=cityCode"`
}

type ReferencesCitiesByCityCodeGetQueryParams struct {
	Lang   *string `queryParam:"style=form,explode=true,name=lang"`
	Limit  *string `queryParam:"style=form,explode=true,name=limit"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
}

type ReferencesCitiesByCityCodeGetHeaders struct {
	Accept string `header:"name=Accept"`
}

type ReferencesCitiesByCityCodeGetSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type ReferencesCitiesByCityCodeGetRequest struct {
	PathParams  ReferencesCitiesByCityCodeGetPathParams
	QueryParams ReferencesCitiesByCityCodeGetQueryParams
	Headers     ReferencesCitiesByCityCodeGetHeaders
	Security    ReferencesCitiesByCityCodeGetSecurity
}

type ReferencesCitiesByCityCodeGetResponse struct {
	ContentType                                           string
	ReferencesCitiesByCityCodeGet200ApplicationJSONObject map[string]interface{}
	StatusCode                                            int64
}
