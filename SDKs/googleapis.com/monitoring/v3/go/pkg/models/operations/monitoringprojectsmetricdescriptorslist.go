package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsMetricDescriptorsListPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type MonitoringProjectsMetricDescriptorsListQueryParams struct {
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

type MonitoringProjectsMetricDescriptorsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsMetricDescriptorsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsMetricDescriptorsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsMetricDescriptorsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsMetricDescriptorsListSecurity struct {
	Option1 *MonitoringProjectsMetricDescriptorsListSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsMetricDescriptorsListSecurityOption2 `security:"option"`
	Option3 *MonitoringProjectsMetricDescriptorsListSecurityOption3 `security:"option"`
	Option4 *MonitoringProjectsMetricDescriptorsListSecurityOption4 `security:"option"`
}

type MonitoringProjectsMetricDescriptorsListRequest struct {
	PathParams  MonitoringProjectsMetricDescriptorsListPathParams
	QueryParams MonitoringProjectsMetricDescriptorsListQueryParams
	Security    MonitoringProjectsMetricDescriptorsListSecurity
}

type MonitoringProjectsMetricDescriptorsListResponse struct {
	ContentType                   string
	ListMetricDescriptorsResponse *shared.ListMetricDescriptorsResponse
	StatusCode                    int64
}
