package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringServicesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type MonitoringServicesCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ServiceID      *string           `queryParam:"style=form,explode=true,name=serviceId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type MonitoringServicesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringServicesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringServicesCreateSecurity struct {
	Option1 *MonitoringServicesCreateSecurityOption1 `security:"option"`
	Option2 *MonitoringServicesCreateSecurityOption2 `security:"option"`
}

type MonitoringServicesCreateRequest struct {
	PathParams  MonitoringServicesCreatePathParams
	QueryParams MonitoringServicesCreateQueryParams
	Request     *shared.ServiceInput `request:"mediaType=application/json"`
	Security    MonitoringServicesCreateSecurity
}

type MonitoringServicesCreateResponse struct {
	ContentType string
	Service     *shared.Service
	StatusCode  int64
}
