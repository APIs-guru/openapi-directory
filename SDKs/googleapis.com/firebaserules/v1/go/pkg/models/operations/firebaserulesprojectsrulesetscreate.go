package operations

import (
"openapi/pkg/models/shared")

type FirebaserulesProjectsRulesetsCreatePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type FirebaserulesProjectsRulesetsCreateQueryParams struct {
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

type FirebaserulesProjectsRulesetsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaserulesProjectsRulesetsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaserulesProjectsRulesetsCreateSecurity struct {
    Option1 *FirebaserulesProjectsRulesetsCreateSecurityOption1 `security:"option"`
    Option2 *FirebaserulesProjectsRulesetsCreateSecurityOption2 `security:"option"`
    
}

type FirebaserulesProjectsRulesetsCreateRequest struct {
    PathParams FirebaserulesProjectsRulesetsCreatePathParams 
    QueryParams FirebaserulesProjectsRulesetsCreateQueryParams 
    Request *shared.Ruleset `request:"mediaType=application/json"`
    Security FirebaserulesProjectsRulesetsCreateSecurity 
    
}

type FirebaserulesProjectsRulesetsCreateResponse struct {
    ContentType string 
    Ruleset *shared.Ruleset 
    StatusCode int64 
    
}

