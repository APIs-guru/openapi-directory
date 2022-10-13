package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsLocationPrometheusAPIV1MetadataListPathParams struct {
	Location string `pathParam:"style=simple,explode=false,name=location"`
	Name     string `pathParam:"style=simple,explode=false,name=name"`
}

type MonitoringProjectsLocationPrometheusAPIV1MetadataListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	Limit          *string           `queryParam:"style=form,explode=true,name=limit"`
	Metric         *string           `queryParam:"style=form,explode=true,name=metric"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type MonitoringProjectsLocationPrometheusAPIV1MetadataListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsLocationPrometheusAPIV1MetadataListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsLocationPrometheusAPIV1MetadataListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsLocationPrometheusAPIV1MetadataListSecurity struct {
	Option1 *MonitoringProjectsLocationPrometheusAPIV1MetadataListSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsLocationPrometheusAPIV1MetadataListSecurityOption2 `security:"option"`
	Option3 *MonitoringProjectsLocationPrometheusAPIV1MetadataListSecurityOption3 `security:"option"`
}

type MonitoringProjectsLocationPrometheusAPIV1MetadataListRequest struct {
	PathParams  MonitoringProjectsLocationPrometheusAPIV1MetadataListPathParams
	QueryParams MonitoringProjectsLocationPrometheusAPIV1MetadataListQueryParams
	Security    MonitoringProjectsLocationPrometheusAPIV1MetadataListSecurity
}

type MonitoringProjectsLocationPrometheusAPIV1MetadataListResponse struct {
	ContentType string
	HTTPBody    *shared.HTTPBody
	StatusCode  int64
}
