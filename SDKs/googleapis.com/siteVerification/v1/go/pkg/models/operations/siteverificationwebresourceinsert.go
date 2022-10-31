package operations

import (
"openapi/pkg/models/shared")

type SiteVerificationWebResourceInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    VerificationMethod string `queryParam:"style=form,explode=true,name=verificationMethod"`
    
}

type SiteVerificationWebResourceInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SiteVerificationWebResourceInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SiteVerificationWebResourceInsertSecurity struct {
    Option1 *SiteVerificationWebResourceInsertSecurityOption1 `security:"option"`
    Option2 *SiteVerificationWebResourceInsertSecurityOption2 `security:"option"`
    
}

type SiteVerificationWebResourceInsertRequest struct {
    QueryParams SiteVerificationWebResourceInsertQueryParams 
    Request *shared.SiteVerificationWebResourceResource `request:"mediaType=application/json"`
    Security SiteVerificationWebResourceInsertSecurity 
    
}

type SiteVerificationWebResourceInsertResponse struct {
    ContentType string 
    SiteVerificationWebResourceResource *shared.SiteVerificationWebResourceResource 
    StatusCode int64 
    
}

