package operations

import (
"openapi/pkg/models/shared")

type FirebaseProjectsAndroidAppsShaListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebaseProjectsAndroidAppsShaListQueryParams struct {
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

type FirebaseProjectsAndroidAppsShaListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsAndroidAppsShaListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsAndroidAppsShaListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsAndroidAppsShaListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsAndroidAppsShaListSecurity struct {
    Option1 *FirebaseProjectsAndroidAppsShaListSecurityOption1 `security:"option"`
    Option2 *FirebaseProjectsAndroidAppsShaListSecurityOption2 `security:"option"`
    Option3 *FirebaseProjectsAndroidAppsShaListSecurityOption3 `security:"option"`
    Option4 *FirebaseProjectsAndroidAppsShaListSecurityOption4 `security:"option"`
    
}

type FirebaseProjectsAndroidAppsShaListRequest struct {
    PathParams FirebaseProjectsAndroidAppsShaListPathParams 
    QueryParams FirebaseProjectsAndroidAppsShaListQueryParams 
    Security FirebaseProjectsAndroidAppsShaListSecurity 
    
}

type FirebaseProjectsAndroidAppsShaListResponse struct {
    ContentType string 
    ListShaCertificatesResponse *shared.ListShaCertificatesResponse 
    StatusCode int64 
    
}

