package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllProductsV2PathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type GetAllProductsV2QueryParams struct {
	Sort *bool `queryParam:"style=form,explode=true,name=sort"`
}

type GetAllProductsV2Security struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type GetAllProductsV2Request struct {
	PathParams  GetAllProductsV2PathParams
	QueryParams GetAllProductsV2QueryParams
	Security    GetAllProductsV2Security
}

type GetAllProductsV2Response struct {
	ContentType      string
	ProductResponses []shared.ProductResponse
	StatusCode       int64
}
