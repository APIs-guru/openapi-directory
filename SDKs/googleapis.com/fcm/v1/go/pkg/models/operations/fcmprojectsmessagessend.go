package operations

import (
"openapi/pkg/models/shared")

type FcmProjectsMessagesSendPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FcmProjectsMessagesSendQueryParams struct {
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

type FcmProjectsMessagesSendSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FcmProjectsMessagesSendSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FcmProjectsMessagesSendSecurity struct {
    Option1 *FcmProjectsMessagesSendSecurityOption1 `security:"option"`
    Option2 *FcmProjectsMessagesSendSecurityOption2 `security:"option"`
    
}

type FcmProjectsMessagesSendRequest struct {
    PathParams FcmProjectsMessagesSendPathParams 
    QueryParams FcmProjectsMessagesSendQueryParams 
    Request *shared.SendMessageRequest `request:"mediaType=application/json"`
    Security FcmProjectsMessagesSendSecurity 
    
}

type FcmProjectsMessagesSendResponse struct {
    ContentType string 
    Message *shared.Message 
    StatusCode int64 
    
}

