package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsDashboardsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type MonitoringProjectsDashboardsPatchQueryParams struct {
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
	ValidateOnly   *bool             `queryParam:"style=form,explode=true,name=validateOnly"`
}

type MonitoringProjectsDashboardsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsDashboardsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsDashboardsPatchSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsDashboardsPatchSecurity struct {
	Option1 *MonitoringProjectsDashboardsPatchSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsDashboardsPatchSecurityOption2 `security:"option"`
	Option3 *MonitoringProjectsDashboardsPatchSecurityOption3 `security:"option"`
}

type MonitoringProjectsDashboardsPatchRequest struct {
	PathParams  MonitoringProjectsDashboardsPatchPathParams
	QueryParams MonitoringProjectsDashboardsPatchQueryParams
	Request     *shared.Dashboard `request:"mediaType=application/json"`
	Security    MonitoringProjectsDashboardsPatchSecurity
}

type MonitoringProjectsDashboardsPatchResponse struct {
	ContentType string
	Dashboard   *shared.Dashboard
	StatusCode  int64
}
