package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsLocationPrometheusAPIV1QueryPathParams struct {
	Location string `pathParam:"style=simple,explode=false,name=location"`
	Name     string `pathParam:"style=simple,explode=false,name=name"`
}

type MonitoringProjectsLocationPrometheusAPIV1QueryQueryParams struct {
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

type MonitoringProjectsLocationPrometheusAPIV1QuerySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsLocationPrometheusAPIV1QuerySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsLocationPrometheusAPIV1QuerySecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsLocationPrometheusAPIV1QuerySecurity struct {
	Option1 *MonitoringProjectsLocationPrometheusAPIV1QuerySecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsLocationPrometheusAPIV1QuerySecurityOption2 `security:"option"`
	Option3 *MonitoringProjectsLocationPrometheusAPIV1QuerySecurityOption3 `security:"option"`
}

type MonitoringProjectsLocationPrometheusAPIV1QueryRequest struct {
	PathParams  MonitoringProjectsLocationPrometheusAPIV1QueryPathParams
	QueryParams MonitoringProjectsLocationPrometheusAPIV1QueryQueryParams
	Request     *shared.QueryInstantRequest `request:"mediaType=application/json"`
	Security    MonitoringProjectsLocationPrometheusAPIV1QuerySecurity
}

type MonitoringProjectsLocationPrometheusAPIV1QueryResponse struct {
	ContentType string
	HTTPBody    *shared.HTTPBody
	StatusCode  int64
}
