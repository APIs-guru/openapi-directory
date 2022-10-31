package operations

import (
"openapi/pkg/models/shared")

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnum string

const (
    HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnumMessageViewUnspecified HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnum = "MESSAGE_VIEW_UNSPECIFIED"
HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnumRawOnly HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnum = "RAW_ONLY"
HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnumParsedOnly HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnum = "PARSED_ONLY"
HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnumFull HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnum = "FULL"
HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnumSchematizedOnly HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnum = "SCHEMATIZED_ONLY"
HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnumBasic HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnum = "BASIC"
)


type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListRequest struct {
    PathParams HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListPathParams 
    QueryParams HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListQueryParams 
    Security HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListSecurity 
    
}

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListResponse struct {
    ContentType string 
    ListMessagesResponse *shared.ListMessagesResponse 
    StatusCode int64 
    
}

