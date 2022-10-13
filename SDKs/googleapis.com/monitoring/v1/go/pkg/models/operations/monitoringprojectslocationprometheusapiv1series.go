package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsLocationPrometheusAPIV1SeriesPathParams struct {
	Location string `pathParam:"style=simple,explode=false,name=location"`
	Name     string `pathParam:"style=simple,explode=false,name=name"`
}

type MonitoringProjectsLocationPrometheusAPIV1SeriesQueryParams struct {
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

type MonitoringProjectsLocationPrometheusAPIV1SeriesSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsLocationPrometheusAPIV1SeriesSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsLocationPrometheusAPIV1SeriesSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsLocationPrometheusAPIV1SeriesSecurity struct {
	Option1 *MonitoringProjectsLocationPrometheusAPIV1SeriesSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsLocationPrometheusAPIV1SeriesSecurityOption2 `security:"option"`
	Option3 *MonitoringProjectsLocationPrometheusAPIV1SeriesSecurityOption3 `security:"option"`
}

type MonitoringProjectsLocationPrometheusAPIV1SeriesRequest struct {
	PathParams  MonitoringProjectsLocationPrometheusAPIV1SeriesPathParams
	QueryParams MonitoringProjectsLocationPrometheusAPIV1SeriesQueryParams
	Request     *shared.QuerySeriesRequest `request:"mediaType=application/json"`
	Security    MonitoringProjectsLocationPrometheusAPIV1SeriesSecurity
}

type MonitoringProjectsLocationPrometheusAPIV1SeriesResponse struct {
	ContentType string
	HTTPBody    *shared.HTTPBody
	StatusCode  int64
}
