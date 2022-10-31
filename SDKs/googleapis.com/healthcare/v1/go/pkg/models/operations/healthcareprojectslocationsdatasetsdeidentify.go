package operations

import (
"openapi/pkg/models/shared")

type HealthcareProjectsLocationsDatasetsDeidentifyPathParams struct {
    SourceDataset string `pathParam:"style=simple,explode=false,name=sourceDataset"`
    
}

type HealthcareProjectsLocationsDatasetsDeidentifyQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
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

type HealthcareProjectsLocationsDatasetsDeidentifySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type HealthcareProjectsLocationsDatasetsDeidentifyRequest struct {
    PathParams HealthcareProjectsLocationsDatasetsDeidentifyPathParams 
    QueryParams HealthcareProjectsLocationsDatasetsDeidentifyQueryParams 
    Request *shared.DeidentifyDatasetRequest `request:"mediaType=application/json"`
    Security HealthcareProjectsLocationsDatasetsDeidentifySecurity 
    
}

type HealthcareProjectsLocationsDatasetsDeidentifyResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

