package operations

import (
"openapi/pkg/models/shared")

type HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateQueryParams struct {
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
    Source *string `queryParam:"style=form,explode=true,name=source"`
    System *string `queryParam:"style=form,explode=true,name=system"`
    Target *string `queryParam:"style=form,explode=true,name=target"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    URL *string `queryParam:"style=form,explode=true,name=url"`
    
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateRequest struct {
    PathParams HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslatePathParams 
    QueryParams HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateQueryParams 
    Security HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateSecurity 
    
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateResponse struct {
    ContentType string 
    HTTPBody *shared.HTTPBody 
    StatusCode int64 
    
}

