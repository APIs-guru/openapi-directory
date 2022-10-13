package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsDashboardsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type MonitoringProjectsDashboardsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type MonitoringProjectsDashboardsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsDashboardsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsDashboardsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsDashboardsListSecurity struct {
	Option1 *MonitoringProjectsDashboardsListSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsDashboardsListSecurityOption2 `security:"option"`
	Option3 *MonitoringProjectsDashboardsListSecurityOption3 `security:"option"`
}

type MonitoringProjectsDashboardsListRequest struct {
	PathParams  MonitoringProjectsDashboardsListPathParams
	QueryParams MonitoringProjectsDashboardsListQueryParams
	Security    MonitoringProjectsDashboardsListSecurity
}

type MonitoringProjectsDashboardsListResponse struct {
	ContentType            string
	ListDashboardsResponse *shared.ListDashboardsResponse
	StatusCode             int64
}
