package operations

import (
	"openapi/pkg/models/shared"
)

type ServicenetworkingOperationsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ServicenetworkingOperationsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ServicenetworkingOperationsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicenetworkingOperationsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicenetworkingOperationsGetSecurity struct {
	Option1 *ServicenetworkingOperationsGetSecurityOption1 `security:"option"`
	Option2 *ServicenetworkingOperationsGetSecurityOption2 `security:"option"`
}

type ServicenetworkingOperationsGetRequest struct {
	PathParams  ServicenetworkingOperationsGetPathParams
	QueryParams ServicenetworkingOperationsGetQueryParams
	Security    ServicenetworkingOperationsGetSecurity
}

type ServicenetworkingOperationsGetResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
