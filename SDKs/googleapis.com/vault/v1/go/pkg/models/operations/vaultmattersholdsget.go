package operations

import (
"openapi/pkg/models/shared")

type VaultMattersHoldsGetPathParams struct {
    HoldID string `pathParam:"style=simple,explode=false,name=holdId"`
    MatterID string `pathParam:"style=simple,explode=false,name=matterId"`
    
}


type VaultMattersHoldsGetViewEnum string

const (
    VaultMattersHoldsGetViewEnumHoldViewUnspecified VaultMattersHoldsGetViewEnum = "HOLD_VIEW_UNSPECIFIED"
VaultMattersHoldsGetViewEnumBasicHold VaultMattersHoldsGetViewEnum = "BASIC_HOLD"
VaultMattersHoldsGetViewEnumFullHold VaultMattersHoldsGetViewEnum = "FULL_HOLD"
)


type VaultMattersHoldsGetQueryParams struct {
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
    View *VaultMattersHoldsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type VaultMattersHoldsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersHoldsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersHoldsGetSecurity struct {
    Option1 *VaultMattersHoldsGetSecurityOption1 `security:"option"`
    Option2 *VaultMattersHoldsGetSecurityOption2 `security:"option"`
    
}

type VaultMattersHoldsGetRequest struct {
    PathParams VaultMattersHoldsGetPathParams 
    QueryParams VaultMattersHoldsGetQueryParams 
    Security VaultMattersHoldsGetSecurity 
    
}

type VaultMattersHoldsGetResponse struct {
    ContentType string 
    Hold *shared.Hold 
    StatusCode int64 
    
}

