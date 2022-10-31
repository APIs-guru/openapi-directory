package operations

import (
"openapi/pkg/models/shared")

type FirebaseProjectsWebAppsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebaseProjectsWebAppsListQueryParams struct {
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

type FirebaseProjectsWebAppsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsWebAppsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsWebAppsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsWebAppsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsWebAppsListSecurity struct {
    Option1 *FirebaseProjectsWebAppsListSecurityOption1 `security:"option"`
    Option2 *FirebaseProjectsWebAppsListSecurityOption2 `security:"option"`
    Option3 *FirebaseProjectsWebAppsListSecurityOption3 `security:"option"`
    Option4 *FirebaseProjectsWebAppsListSecurityOption4 `security:"option"`
    
}

type FirebaseProjectsWebAppsListRequest struct {
    PathParams FirebaseProjectsWebAppsListPathParams 
    QueryParams FirebaseProjectsWebAppsListQueryParams 
    Security FirebaseProjectsWebAppsListSecurity 
    
}

type FirebaseProjectsWebAppsListResponse struct {
    ContentType string 
    ListWebAppsResponse *shared.ListWebAppsResponse 
    StatusCode int64 
    
}

