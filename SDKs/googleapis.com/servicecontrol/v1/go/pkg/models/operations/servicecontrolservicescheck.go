package operations

import (
	"openapi/pkg/models/shared"
)

type ServicecontrolServicesCheckPathParams struct {
	ServiceName string `pathParam:"style=simple,explode=false,name=serviceName"`
}

type ServicecontrolServicesCheckQueryParams struct {
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

type ServicecontrolServicesCheckSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicecontrolServicesCheckSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicecontrolServicesCheckSecurity struct {
	Option1 *ServicecontrolServicesCheckSecurityOption1 `security:"option"`
	Option2 *ServicecontrolServicesCheckSecurityOption2 `security:"option"`
}

type ServicecontrolServicesCheckRequest struct {
	PathParams  ServicecontrolServicesCheckPathParams
	QueryParams ServicecontrolServicesCheckQueryParams
	Request     *shared.CheckRequest `request:"mediaType=application/json"`
	Security    ServicecontrolServicesCheckSecurity
}

type ServicecontrolServicesCheckResponse struct {
	CheckResponse *shared.CheckResponse
	ContentType   string
	StatusCode    int64
}
