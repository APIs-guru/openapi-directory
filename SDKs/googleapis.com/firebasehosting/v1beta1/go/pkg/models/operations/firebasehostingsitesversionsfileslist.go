package operations

import (
"openapi/pkg/models/shared")

type FirebasehostingSitesVersionsFilesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type FirebasehostingSitesVersionsFilesListStatusEnum string

const (
    FirebasehostingSitesVersionsFilesListStatusEnumStatusUnspecified FirebasehostingSitesVersionsFilesListStatusEnum = "STATUS_UNSPECIFIED"
FirebasehostingSitesVersionsFilesListStatusEnumExpected FirebasehostingSitesVersionsFilesListStatusEnum = "EXPECTED"
FirebasehostingSitesVersionsFilesListStatusEnumActive FirebasehostingSitesVersionsFilesListStatusEnum = "ACTIVE"
)


type FirebasehostingSitesVersionsFilesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Status *FirebasehostingSitesVersionsFilesListStatusEnum `queryParam:"style=form,explode=true,name=status"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirebasehostingSitesVersionsFilesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesVersionsFilesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesVersionsFilesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesVersionsFilesListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesVersionsFilesListSecurity struct {
    Option1 *FirebasehostingSitesVersionsFilesListSecurityOption1 `security:"option"`
    Option2 *FirebasehostingSitesVersionsFilesListSecurityOption2 `security:"option"`
    Option3 *FirebasehostingSitesVersionsFilesListSecurityOption3 `security:"option"`
    Option4 *FirebasehostingSitesVersionsFilesListSecurityOption4 `security:"option"`
    
}

type FirebasehostingSitesVersionsFilesListRequest struct {
    PathParams FirebasehostingSitesVersionsFilesListPathParams 
    QueryParams FirebasehostingSitesVersionsFilesListQueryParams 
    Security FirebasehostingSitesVersionsFilesListSecurity 
    
}

type FirebasehostingSitesVersionsFilesListResponse struct {
    ContentType string 
    ListVersionFilesResponse *shared.ListVersionFilesResponse 
    StatusCode int64 
    
}

