package operations

import (
"openapi/pkg/models/shared")

type OsloginUsersGetLoginProfilePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type OsloginUsersGetLoginProfileQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    ProjectID *string `queryParam:"style=form,explode=true,name=projectId"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SystemID *string `queryParam:"style=form,explode=true,name=systemId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type OsloginUsersGetLoginProfileSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type OsloginUsersGetLoginProfileSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type OsloginUsersGetLoginProfileSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type OsloginUsersGetLoginProfileSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type OsloginUsersGetLoginProfileSecurity struct {
    Option1 *OsloginUsersGetLoginProfileSecurityOption1 `security:"option"`
    Option2 *OsloginUsersGetLoginProfileSecurityOption2 `security:"option"`
    Option3 *OsloginUsersGetLoginProfileSecurityOption3 `security:"option"`
    Option4 *OsloginUsersGetLoginProfileSecurityOption4 `security:"option"`
    
}

type OsloginUsersGetLoginProfileRequest struct {
    PathParams OsloginUsersGetLoginProfilePathParams 
    QueryParams OsloginUsersGetLoginProfileQueryParams 
    Security OsloginUsersGetLoginProfileSecurity 
    
}

type OsloginUsersGetLoginProfileResponse struct {
    ContentType string 
    LoginProfile *shared.LoginProfile 
    StatusCode int64 
    
}

