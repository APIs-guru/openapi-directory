package operations

import (
"openapi/pkg/models/shared")

type VaultMattersExportsGetPathParams struct {
    ExportID string `pathParam:"style=simple,explode=false,name=exportId"`
    MatterID string `pathParam:"style=simple,explode=false,name=matterId"`
    
}

type VaultMattersExportsGetQueryParams struct {
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

type VaultMattersExportsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersExportsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersExportsGetSecurity struct {
    Option1 *VaultMattersExportsGetSecurityOption1 `security:"option"`
    Option2 *VaultMattersExportsGetSecurityOption2 `security:"option"`
    
}

type VaultMattersExportsGetRequest struct {
    PathParams VaultMattersExportsGetPathParams 
    QueryParams VaultMattersExportsGetQueryParams 
    Security VaultMattersExportsGetSecurity 
    
}

type VaultMattersExportsGetResponse struct {
    ContentType string 
    Export *shared.Export 
    StatusCode int64 
    
}

