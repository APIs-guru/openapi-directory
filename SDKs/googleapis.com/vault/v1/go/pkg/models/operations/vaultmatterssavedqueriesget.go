package operations

import (
"openapi/pkg/models/shared")

type VaultMattersSavedQueriesGetPathParams struct {
    MatterID string `pathParam:"style=simple,explode=false,name=matterId"`
    SavedQueryID string `pathParam:"style=simple,explode=false,name=savedQueryId"`
    
}

type VaultMattersSavedQueriesGetQueryParams struct {
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

type VaultMattersSavedQueriesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersSavedQueriesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersSavedQueriesGetSecurity struct {
    Option1 *VaultMattersSavedQueriesGetSecurityOption1 `security:"option"`
    Option2 *VaultMattersSavedQueriesGetSecurityOption2 `security:"option"`
    
}

type VaultMattersSavedQueriesGetRequest struct {
    PathParams VaultMattersSavedQueriesGetPathParams 
    QueryParams VaultMattersSavedQueriesGetQueryParams 
    Security VaultMattersSavedQueriesGetSecurity 
    
}

type VaultMattersSavedQueriesGetResponse struct {
    ContentType string 
    SavedQuery *shared.SavedQuery 
    StatusCode int64 
    
}

