package operations

import (
"openapi/pkg/models/shared")

type LoggingEntriesTailQueryParams struct {
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

type LoggingEntriesTailSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingEntriesTailSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingEntriesTailSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingEntriesTailSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingEntriesTailSecurity struct {
    Option1 *LoggingEntriesTailSecurityOption1 `security:"option"`
    Option2 *LoggingEntriesTailSecurityOption2 `security:"option"`
    Option3 *LoggingEntriesTailSecurityOption3 `security:"option"`
    Option4 *LoggingEntriesTailSecurityOption4 `security:"option"`
    
}

type LoggingEntriesTailRequest struct {
    QueryParams LoggingEntriesTailQueryParams 
    Request *shared.TailLogEntriesRequest `request:"mediaType=application/json"`
    Security LoggingEntriesTailSecurity 
    
}

type LoggingEntriesTailResponse struct {
    ContentType string 
    StatusCode int64 
    TailLogEntriesResponse *shared.TailLogEntriesResponse 
    
}

