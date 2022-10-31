package operations

import (
	"openapi/pkg/models/shared"
)

type HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
	Type   string `pathParam:"style=simple,explode=false,name=type"`
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Profile        *string           `queryParam:"style=form,explode=true,name=profile"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateRequest struct {
	PathParams  HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidatePathParams
	QueryParams HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateQueryParams
	Request     *shared.HTTPBody `request:"mediaType=application/json"`
	Security    HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateSecurity
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateResponse struct {
	ContentType string
	HTTPBody    *shared.HTTPBody
	StatusCode  int64
}
