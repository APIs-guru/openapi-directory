package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsMetricDescriptorsCreatePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type MonitoringProjectsMetricDescriptorsCreateQueryParams struct {
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

type MonitoringProjectsMetricDescriptorsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsMetricDescriptorsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsMetricDescriptorsCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsMetricDescriptorsCreateSecurity struct {
	Option1 *MonitoringProjectsMetricDescriptorsCreateSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsMetricDescriptorsCreateSecurityOption2 `security:"option"`
	Option3 *MonitoringProjectsMetricDescriptorsCreateSecurityOption3 `security:"option"`
}

type MonitoringProjectsMetricDescriptorsCreateRequest struct {
	PathParams  MonitoringProjectsMetricDescriptorsCreatePathParams
	QueryParams MonitoringProjectsMetricDescriptorsCreateQueryParams
	Request     *shared.MetricDescriptor `request:"mediaType=application/json"`
	Security    MonitoringProjectsMetricDescriptorsCreateSecurity
}

type MonitoringProjectsMetricDescriptorsCreateResponse struct {
	ContentType      string
	MetricDescriptor *shared.MetricDescriptor
	StatusCode       int64
}
