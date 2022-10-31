package operations

import (
"openapi/pkg/models/shared")

type FirebaseProjectsIosAppsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebaseProjectsIosAppsListQueryParams struct {
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
    ShowDeleted *bool `queryParam:"style=form,explode=true,name=showDeleted"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirebaseProjectsIosAppsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsIosAppsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsIosAppsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsIosAppsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsIosAppsListSecurity struct {
    Option1 *FirebaseProjectsIosAppsListSecurityOption1 `security:"option"`
    Option2 *FirebaseProjectsIosAppsListSecurityOption2 `security:"option"`
    Option3 *FirebaseProjectsIosAppsListSecurityOption3 `security:"option"`
    Option4 *FirebaseProjectsIosAppsListSecurityOption4 `security:"option"`
    
}

type FirebaseProjectsIosAppsListRequest struct {
    PathParams FirebaseProjectsIosAppsListPathParams 
    QueryParams FirebaseProjectsIosAppsListQueryParams 
    Security FirebaseProjectsIosAppsListSecurity 
    
}

type FirebaseProjectsIosAppsListResponse struct {
    ContentType string 
    ListIosAppsResponse *shared.ListIosAppsResponse 
    StatusCode int64 
    
}

