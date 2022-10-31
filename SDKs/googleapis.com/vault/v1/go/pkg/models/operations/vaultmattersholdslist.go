package operations

import (
"openapi/pkg/models/shared")

type VaultMattersHoldsListPathParams struct {
    MatterID string `pathParam:"style=simple,explode=false,name=matterId"`
    
}


type VaultMattersHoldsListViewEnum string

const (
    VaultMattersHoldsListViewEnumHoldViewUnspecified VaultMattersHoldsListViewEnum = "HOLD_VIEW_UNSPECIFIED"
VaultMattersHoldsListViewEnumBasicHold VaultMattersHoldsListViewEnum = "BASIC_HOLD"
VaultMattersHoldsListViewEnumFullHold VaultMattersHoldsListViewEnum = "FULL_HOLD"
)


type VaultMattersHoldsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *VaultMattersHoldsListViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type VaultMattersHoldsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersHoldsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersHoldsListSecurity struct {
    Option1 *VaultMattersHoldsListSecurityOption1 `security:"option"`
    Option2 *VaultMattersHoldsListSecurityOption2 `security:"option"`
    
}

type VaultMattersHoldsListRequest struct {
    PathParams VaultMattersHoldsListPathParams 
    QueryParams VaultMattersHoldsListQueryParams 
    Security VaultMattersHoldsListSecurity 
    
}

type VaultMattersHoldsListResponse struct {
    ContentType string 
    ListHoldsResponse *shared.ListHoldsResponse 
    StatusCode int64 
    
}

