package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsDashboardsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type MonitoringProjectsDashboardsGetQueryParams struct {
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

type MonitoringProjectsDashboardsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsDashboardsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsDashboardsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsDashboardsGetSecurity struct {
	Option1 *MonitoringProjectsDashboardsGetSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsDashboardsGetSecurityOption2 `security:"option"`
	Option3 *MonitoringProjectsDashboardsGetSecurityOption3 `security:"option"`
}

type MonitoringProjectsDashboardsGetRequest struct {
	PathParams  MonitoringProjectsDashboardsGetPathParams
	QueryParams MonitoringProjectsDashboardsGetQueryParams
	Security    MonitoringProjectsDashboardsGetSecurity
}

type MonitoringProjectsDashboardsGetResponse struct {
	ContentType string
	Dashboard   *shared.Dashboard
	StatusCode  int64
}
