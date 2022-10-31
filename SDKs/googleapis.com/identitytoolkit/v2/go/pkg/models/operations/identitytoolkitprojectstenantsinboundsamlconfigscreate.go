package operations

import (
"openapi/pkg/models/shared")

type IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    InboundSamlConfigID *string `queryParam:"style=form,explode=true,name=inboundSamlConfigId"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity struct {
    Option1 *IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1 `security:"option"`
    Option2 *IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2 `security:"option"`
    
}

type IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest struct {
    PathParams IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams 
    QueryParams IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams 
    Request *shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig `request:"mediaType=application/json"`
    Security IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity 
    
}

type IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse struct {
    ContentType string 
    GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig *shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig 
    StatusCode int64 
    
}

