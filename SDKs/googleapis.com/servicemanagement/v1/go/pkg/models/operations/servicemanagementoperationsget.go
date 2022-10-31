package operations

import (
	"openapi/pkg/models/shared"
)

type ServicemanagementOperationsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ServicemanagementOperationsGetQueryParams struct {
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

type ServicemanagementOperationsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementOperationsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementOperationsGetSecurity struct {
	Option1 *ServicemanagementOperationsGetSecurityOption1 `security:"option"`
	Option2 *ServicemanagementOperationsGetSecurityOption2 `security:"option"`
}

type ServicemanagementOperationsGetRequest struct {
	PathParams  ServicemanagementOperationsGetPathParams
	QueryParams ServicemanagementOperationsGetQueryParams
	Security    ServicemanagementOperationsGetSecurity
}

type ServicemanagementOperationsGetResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
