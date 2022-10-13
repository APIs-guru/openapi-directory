package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams struct {
	DollarXgafv                *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                        *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                   *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                     *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                        *string           `queryParam:"style=form,explode=true,name=key"`
	MonitoredResourceContainer *string           `queryParam:"style=form,explode=true,name=monitoredResourceContainer"`
	OauthToken                 *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                  *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                 *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol             *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity struct {
	Option1 *MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1 `security:"option"`
	Option2 *MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2 `security:"option"`
	Option3 *MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3 `security:"option"`
}

type MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest struct {
	QueryParams MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams
	Security    MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity
}

type MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse struct {
	ContentType                                 string
	ListMetricsScopesByMonitoredProjectResponse *shared.ListMetricsScopesByMonitoredProjectResponse
	StatusCode                                  int64
}
