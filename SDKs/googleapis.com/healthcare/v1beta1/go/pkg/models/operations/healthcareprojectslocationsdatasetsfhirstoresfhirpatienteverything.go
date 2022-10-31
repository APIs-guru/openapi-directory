package operations

import (
	"openapi/pkg/models/shared"
)

type HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	Count          *int64            `queryParam:"style=form,explode=true,name=_count"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=_page_token"`
	Since          *string           `queryParam:"style=form,explode=true,name=_since"`
	Type           *string           `queryParam:"style=form,explode=true,name=_type"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	End            *string           `queryParam:"style=form,explode=true,name=end"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Start          *string           `queryParam:"style=form,explode=true,name=start"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingRequest struct {
	PathParams  HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingPathParams
	QueryParams HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams
	Security    HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingSecurity
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingResponse struct {
	ContentType string
	HTTPBody    *shared.HTTPBody
	StatusCode  int64
}
