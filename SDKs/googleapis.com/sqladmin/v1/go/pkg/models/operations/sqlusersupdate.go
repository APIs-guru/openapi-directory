package operations

import (
"openapi/pkg/models/shared")

type SQLUsersUpdatePathParams struct {
    Instance string `pathParam:"style=simple,explode=false,name=instance"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type SQLUsersUpdateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Host *string `queryParam:"style=form,explode=true,name=host"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SQLUsersUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLUsersUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLUsersUpdateSecurity struct {
    Option1 *SQLUsersUpdateSecurityOption1 `security:"option"`
    Option2 *SQLUsersUpdateSecurityOption2 `security:"option"`
    
}

type SQLUsersUpdateRequest struct {
    PathParams SQLUsersUpdatePathParams 
    QueryParams SQLUsersUpdateQueryParams 
    Request *shared.User `request:"mediaType=application/json"`
    Security SQLUsersUpdateSecurity 
    
}

type SQLUsersUpdateResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

