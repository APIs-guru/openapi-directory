package operations

import (
	"openapi/pkg/models/shared"
)

type ContentProductstatusesGetPathParams struct {
	MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
	ProductID  string `pathParam:"style=simple,explode=false,name=productId"`
}

type ContentProductstatusesGetQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	Destinations      []string          `queryParam:"style=form,explode=true,name=destinations"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	IncludeAttributes *bool             `queryParam:"style=form,explode=true,name=includeAttributes"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ContentProductstatusesGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContentProductstatusesGetRequest struct {
	PathParams  ContentProductstatusesGetPathParams
	QueryParams ContentProductstatusesGetQueryParams
	Security    ContentProductstatusesGetSecurity
}

type ContentProductstatusesGetResponse struct {
	ContentType   string
	ProductStatus *shared.ProductStatus
	StatusCode    int64
}
