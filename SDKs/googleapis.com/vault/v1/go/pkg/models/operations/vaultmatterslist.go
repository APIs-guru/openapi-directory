package operations

import (
"openapi/pkg/models/shared")


type VaultMattersListStateEnum string

const (
    VaultMattersListStateEnumStateUnspecified VaultMattersListStateEnum = "STATE_UNSPECIFIED"
VaultMattersListStateEnumOpen VaultMattersListStateEnum = "OPEN"
VaultMattersListStateEnumClosed VaultMattersListStateEnum = "CLOSED"
VaultMattersListStateEnumDeleted VaultMattersListStateEnum = "DELETED"
)



type VaultMattersListViewEnum string

const (
    VaultMattersListViewEnumViewUnspecified VaultMattersListViewEnum = "VIEW_UNSPECIFIED"
VaultMattersListViewEnumBasic VaultMattersListViewEnum = "BASIC"
VaultMattersListViewEnumFull VaultMattersListViewEnum = "FULL"
)


type VaultMattersListQueryParams struct {
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
    State *VaultMattersListStateEnum `queryParam:"style=form,explode=true,name=state"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *VaultMattersListViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type VaultMattersListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersListSecurity struct {
    Option1 *VaultMattersListSecurityOption1 `security:"option"`
    Option2 *VaultMattersListSecurityOption2 `security:"option"`
    
}

type VaultMattersListRequest struct {
    QueryParams VaultMattersListQueryParams 
    Security VaultMattersListSecurity 
    
}

type VaultMattersListResponse struct {
    ContentType string 
    ListMattersResponse *shared.ListMattersResponse 
    StatusCode int64 
    
}

