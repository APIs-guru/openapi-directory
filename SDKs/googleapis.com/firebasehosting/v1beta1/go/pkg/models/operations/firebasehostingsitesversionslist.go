package operations

import (
"openapi/pkg/models/shared")

type FirebasehostingSitesVersionsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebasehostingSitesVersionsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirebasehostingSitesVersionsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesVersionsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesVersionsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesVersionsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesVersionsListSecurity struct {
    Option1 *FirebasehostingSitesVersionsListSecurityOption1 `security:"option"`
    Option2 *FirebasehostingSitesVersionsListSecurityOption2 `security:"option"`
    Option3 *FirebasehostingSitesVersionsListSecurityOption3 `security:"option"`
    Option4 *FirebasehostingSitesVersionsListSecurityOption4 `security:"option"`
    
}

type FirebasehostingSitesVersionsListRequest struct {
    PathParams FirebasehostingSitesVersionsListPathParams 
    QueryParams FirebasehostingSitesVersionsListQueryParams 
    Security FirebasehostingSitesVersionsListSecurity 
    
}

type FirebasehostingSitesVersionsListResponse struct {
    ContentType string 
    ListVersionsResponse *shared.ListVersionsResponse 
    StatusCode int64 
    
}

