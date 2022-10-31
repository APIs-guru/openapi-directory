package operations

import (
	"openapi/pkg/models/shared"
)

type ServicemanagementServicesDeletePathParams struct {
	ServiceName string `pathParam:"style=simple,explode=false,name=serviceName"`
}

type ServicemanagementServicesDeleteQueryParams struct {
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

type ServicemanagementServicesDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesDeleteSecurity struct {
	Option1 *ServicemanagementServicesDeleteSecurityOption1 `security:"option"`
	Option2 *ServicemanagementServicesDeleteSecurityOption2 `security:"option"`
}

type ServicemanagementServicesDeleteRequest struct {
	PathParams  ServicemanagementServicesDeletePathParams
	QueryParams ServicemanagementServicesDeleteQueryParams
	Security    ServicemanagementServicesDeleteSecurity
}

type ServicemanagementServicesDeleteResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
