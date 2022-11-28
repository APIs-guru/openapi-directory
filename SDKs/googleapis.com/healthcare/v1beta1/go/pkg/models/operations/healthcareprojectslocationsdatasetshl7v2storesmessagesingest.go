package operations

import (
	"openapi/pkg/models/shared"
)

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams struct {
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

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestRequest struct {
	PathParams  HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestPathParams
	QueryParams HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams
	Request     *shared.IngestMessageRequestInput `request:"mediaType=application/json"`
	Security    HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestSecurity
}

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestResponse struct {
	ContentType           string
	IngestMessageResponse *shared.IngestMessageResponse
	StatusCode            int64
}
