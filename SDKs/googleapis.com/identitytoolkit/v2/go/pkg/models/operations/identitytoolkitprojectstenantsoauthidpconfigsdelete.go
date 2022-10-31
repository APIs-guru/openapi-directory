package operations

import (
"openapi/pkg/models/shared")

type IdentitytoolkitProjectsTenantsOauthIdpConfigsDeletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams struct {
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

type IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity struct {
    Option1 *IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1 `security:"option"`
    Option2 *IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption2 `security:"option"`
    
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest struct {
    PathParams IdentitytoolkitProjectsTenantsOauthIdpConfigsDeletePathParams 
    QueryParams IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams 
    Security IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity 
    
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse struct {
    ContentType string 
    GoogleProtobufEmpty map[string]interface{} 
    StatusCode int64 
    
}

