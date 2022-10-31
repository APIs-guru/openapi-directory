package operations

import (
	"openapi/pkg/models/shared"
)

type PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams struct {
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

type PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest struct {
	PathParams  PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetPathParams
	QueryParams PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams
}

type PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse struct {
	ContentType                                                              string
	GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet *shared.GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet
	StatusCode                                                               int64
}
