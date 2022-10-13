package operations

import (
	"openapi/pkg/models/shared"
)

type ServicemanagementServicesRolloutsGetPathParams struct {
	RolloutID   string `pathParam:"style=simple,explode=false,name=rolloutId"`
	ServiceName string `pathParam:"style=simple,explode=false,name=serviceName"`
}

type ServicemanagementServicesRolloutsGetQueryParams struct {
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

type ServicemanagementServicesRolloutsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesRolloutsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesRolloutsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesRolloutsGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesRolloutsGetSecurity struct {
	Option1 *ServicemanagementServicesRolloutsGetSecurityOption1 `security:"option"`
	Option2 *ServicemanagementServicesRolloutsGetSecurityOption2 `security:"option"`
	Option3 *ServicemanagementServicesRolloutsGetSecurityOption3 `security:"option"`
	Option4 *ServicemanagementServicesRolloutsGetSecurityOption4 `security:"option"`
}

type ServicemanagementServicesRolloutsGetRequest struct {
	PathParams  ServicemanagementServicesRolloutsGetPathParams
	QueryParams ServicemanagementServicesRolloutsGetQueryParams
	Security    ServicemanagementServicesRolloutsGetSecurity
}

type ServicemanagementServicesRolloutsGetResponse struct {
	ContentType string
	Rollout     *shared.Rollout
	StatusCode  int64
}
