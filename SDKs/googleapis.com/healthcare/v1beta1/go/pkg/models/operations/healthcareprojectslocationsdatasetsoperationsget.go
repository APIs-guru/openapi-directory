package operations

import (
"openapi/pkg/models/shared")

type HealthcareProjectsLocationsDatasetsOperationsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type HealthcareProjectsLocationsDatasetsOperationsGetViewEnum string

const (
    HealthcareProjectsLocationsDatasetsOperationsGetViewEnumMessageViewUnspecified HealthcareProjectsLocationsDatasetsOperationsGetViewEnum = "MESSAGE_VIEW_UNSPECIFIED"
HealthcareProjectsLocationsDatasetsOperationsGetViewEnumRawOnly HealthcareProjectsLocationsDatasetsOperationsGetViewEnum = "RAW_ONLY"
HealthcareProjectsLocationsDatasetsOperationsGetViewEnumParsedOnly HealthcareProjectsLocationsDatasetsOperationsGetViewEnum = "PARSED_ONLY"
HealthcareProjectsLocationsDatasetsOperationsGetViewEnumFull HealthcareProjectsLocationsDatasetsOperationsGetViewEnum = "FULL"
HealthcareProjectsLocationsDatasetsOperationsGetViewEnumSchematizedOnly HealthcareProjectsLocationsDatasetsOperationsGetViewEnum = "SCHEMATIZED_ONLY"
HealthcareProjectsLocationsDatasetsOperationsGetViewEnumBasic HealthcareProjectsLocationsDatasetsOperationsGetViewEnum = "BASIC"
)


type HealthcareProjectsLocationsDatasetsOperationsGetQueryParams struct {
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
    View *HealthcareProjectsLocationsDatasetsOperationsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type HealthcareProjectsLocationsDatasetsOperationsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type HealthcareProjectsLocationsDatasetsOperationsGetRequest struct {
    PathParams HealthcareProjectsLocationsDatasetsOperationsGetPathParams 
    QueryParams HealthcareProjectsLocationsDatasetsOperationsGetQueryParams 
    Security HealthcareProjectsLocationsDatasetsOperationsGetSecurity 
    
}

type HealthcareProjectsLocationsDatasetsOperationsGetResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

