package operations

import (
"openapi/pkg/models/shared")

type VaultMattersRemovePermissionsPathParams struct {
    MatterID string `pathParam:"style=simple,explode=false,name=matterId"`
    
}

type VaultMattersRemovePermissionsQueryParams struct {
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

type VaultMattersRemovePermissionsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersRemovePermissionsRequest struct {
    PathParams VaultMattersRemovePermissionsPathParams 
    QueryParams VaultMattersRemovePermissionsQueryParams 
    Request *shared.RemoveMatterPermissionsRequest `request:"mediaType=application/json"`
    Security VaultMattersRemovePermissionsSecurity 
    
}

type VaultMattersRemovePermissionsResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

