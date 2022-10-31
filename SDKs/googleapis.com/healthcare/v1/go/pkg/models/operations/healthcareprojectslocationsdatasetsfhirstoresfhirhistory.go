package operations

import (
"openapi/pkg/models/shared")

type HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    At *string `queryParam:"style=form,explode=true,name=_at"`
    Count *int64 `queryParam:"style=form,explode=true,name=_count"`
    PageToken *string `queryParam:"style=form,explode=true,name=_page_token"`
    Since *string `queryParam:"style=form,explode=true,name=_since"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirHistorySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryRequest struct {
    PathParams HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryPathParams 
    QueryParams HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryQueryParams 
    Security HealthcareProjectsLocationsDatasetsFhirStoresFhirHistorySecurity 
    
}

type HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryResponse struct {
    ContentType string 
    HTTPBody *shared.HTTPBody 
    StatusCode int64 
    
}

