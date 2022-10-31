package operations

import (
"openapi/pkg/models/shared")

type VaultMattersGetPathParams struct {
    MatterID string `pathParam:"style=simple,explode=false,name=matterId"`
    
}


type VaultMattersGetViewEnum string

const (
    VaultMattersGetViewEnumViewUnspecified VaultMattersGetViewEnum = "VIEW_UNSPECIFIED"
VaultMattersGetViewEnumBasic VaultMattersGetViewEnum = "BASIC"
VaultMattersGetViewEnumFull VaultMattersGetViewEnum = "FULL"
)


type VaultMattersGetQueryParams struct {
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
    View *VaultMattersGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type VaultMattersGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersGetSecurity struct {
    Option1 *VaultMattersGetSecurityOption1 `security:"option"`
    Option2 *VaultMattersGetSecurityOption2 `security:"option"`
    
}

type VaultMattersGetRequest struct {
    PathParams VaultMattersGetPathParams 
    QueryParams VaultMattersGetQueryParams 
    Security VaultMattersGetSecurity 
    
}

type VaultMattersGetResponse struct {
    ContentType string 
    Matter *shared.Matter 
    StatusCode int64 
    
}

