package operations

import (
"openapi/pkg/models/shared")

type VaultMattersSavedQueriesListPathParams struct {
    MatterID string `pathParam:"style=simple,explode=false,name=matterId"`
    
}

type VaultMattersSavedQueriesListQueryParams struct {
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
    
}

type VaultMattersSavedQueriesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersSavedQueriesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersSavedQueriesListSecurity struct {
    Option1 *VaultMattersSavedQueriesListSecurityOption1 `security:"option"`
    Option2 *VaultMattersSavedQueriesListSecurityOption2 `security:"option"`
    
}

type VaultMattersSavedQueriesListRequest struct {
    PathParams VaultMattersSavedQueriesListPathParams 
    QueryParams VaultMattersSavedQueriesListQueryParams 
    Security VaultMattersSavedQueriesListSecurity 
    
}

type VaultMattersSavedQueriesListResponse struct {
    ContentType string 
    ListSavedQueriesResponse *shared.ListSavedQueriesResponse 
    StatusCode int64 
    
}

