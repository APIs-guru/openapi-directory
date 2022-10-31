package operations

import (
	"openapi/pkg/models/shared"
)

type ServicemanagementServicesConfigsSubmitPathParams struct {
	ServiceName string `pathParam:"style=simple,explode=false,name=serviceName"`
}

type ServicemanagementServicesConfigsSubmitQueryParams struct {
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

type ServicemanagementServicesConfigsSubmitSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesConfigsSubmitSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesConfigsSubmitSecurity struct {
	Option1 *ServicemanagementServicesConfigsSubmitSecurityOption1 `security:"option"`
	Option2 *ServicemanagementServicesConfigsSubmitSecurityOption2 `security:"option"`
}

type ServicemanagementServicesConfigsSubmitRequest struct {
	PathParams  ServicemanagementServicesConfigsSubmitPathParams
	QueryParams ServicemanagementServicesConfigsSubmitQueryParams
	Request     *shared.SubmitConfigSourceRequest `request:"mediaType=application/json"`
	Security    ServicemanagementServicesConfigsSubmitSecurity
}

type ServicemanagementServicesConfigsSubmitResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
