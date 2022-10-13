package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsMonitoredResourceDescriptorsListPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type MonitoringProjectsMonitoredResourceDescriptorsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string           `queryParam:"style=form,explode=true,name=filter"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsMonitoredResourceDescriptorsListSecurity struct {
	Option1 *MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2 `security:"option"`
	Option3 *MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3 `security:"option"`
	Option4 *MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4 `security:"option"`
}

type MonitoringProjectsMonitoredResourceDescriptorsListRequest struct {
	PathParams  MonitoringProjectsMonitoredResourceDescriptorsListPathParams
	QueryParams MonitoringProjectsMonitoredResourceDescriptorsListQueryParams
	Security    MonitoringProjectsMonitoredResourceDescriptorsListSecurity
}

type MonitoringProjectsMonitoredResourceDescriptorsListResponse struct {
	ContentType                              string
	ListMonitoredResourceDescriptorsResponse *shared.ListMonitoredResourceDescriptorsResponse
	StatusCode                               int64
}
