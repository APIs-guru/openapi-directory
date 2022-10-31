package operations

import (
"openapi/pkg/models/shared")

type HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapTranslatePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapTranslateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Code *string `queryParam:"style=form,explode=true,name=code"`
    ConceptMapVersion *string `queryParam:"style=form,explode=true,name=conceptMapVersion"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    System *string `queryParam:"style=form,explode=true,name=system"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapTranslateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapTranslateRequest struct {
    PathParams HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapTranslatePathParams 
    QueryParams HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapTranslateQueryParams 
    Security HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapTranslateSecurity 
    
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapTranslateResponse struct {
    ContentType string 
    HTTPBody *shared.HTTPBody 
    StatusCode int64 
    
}

