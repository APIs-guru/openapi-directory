package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsTimeSeriesCreateServicePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type MonitoringProjectsTimeSeriesCreateServiceQueryParams struct {
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

type MonitoringProjectsTimeSeriesCreateServiceSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsTimeSeriesCreateServiceSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsTimeSeriesCreateServiceSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsTimeSeriesCreateServiceSecurity struct {
	Option1 *MonitoringProjectsTimeSeriesCreateServiceSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsTimeSeriesCreateServiceSecurityOption2 `security:"option"`
	Option3 *MonitoringProjectsTimeSeriesCreateServiceSecurityOption3 `security:"option"`
}

type MonitoringProjectsTimeSeriesCreateServiceRequest struct {
	PathParams  MonitoringProjectsTimeSeriesCreateServicePathParams
	QueryParams MonitoringProjectsTimeSeriesCreateServiceQueryParams
	Request     *shared.CreateTimeSeriesRequest `request:"mediaType=application/json"`
	Security    MonitoringProjectsTimeSeriesCreateServiceSecurity
}

type MonitoringProjectsTimeSeriesCreateServiceResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
