package operations

import (
	"openapi/pkg/models/shared"
)

type ServicemanagementServicesGetConfigPathParams struct {
	ServiceName string `pathParam:"style=simple,explode=false,name=serviceName"`
}

type ServicemanagementServicesGetConfigViewEnum string

const (
	ServicemanagementServicesGetConfigViewEnumBasic ServicemanagementServicesGetConfigViewEnum = "BASIC"
	ServicemanagementServicesGetConfigViewEnumFull  ServicemanagementServicesGetConfigViewEnum = "FULL"
)

type ServicemanagementServicesGetConfigQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                           `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                     `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                             `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                     `queryParam:"style=form,explode=true,name=callback"`
	ConfigID       *string                                     `queryParam:"style=form,explode=true,name=configId"`
	Fields         *string                                     `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                     `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                     `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                       `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                     `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                     `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                     `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *ServicemanagementServicesGetConfigViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type ServicemanagementServicesGetConfigSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesGetConfigSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesGetConfigSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesGetConfigSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesGetConfigSecurity struct {
	Option1 *ServicemanagementServicesGetConfigSecurityOption1 `security:"option"`
	Option2 *ServicemanagementServicesGetConfigSecurityOption2 `security:"option"`
	Option3 *ServicemanagementServicesGetConfigSecurityOption3 `security:"option"`
	Option4 *ServicemanagementServicesGetConfigSecurityOption4 `security:"option"`
}

type ServicemanagementServicesGetConfigRequest struct {
	PathParams  ServicemanagementServicesGetConfigPathParams
	QueryParams ServicemanagementServicesGetConfigQueryParams
	Security    ServicemanagementServicesGetConfigSecurity
}

type ServicemanagementServicesGetConfigResponse struct {
	ContentType string
	Service     *shared.Service
	StatusCode  int64
}
