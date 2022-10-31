package operations

import (
"openapi/pkg/models/shared")

type CloudassetSavedQueriesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudassetSavedQueriesCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SavedQueryID *string `queryParam:"style=form,explode=true,name=savedQueryId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudassetSavedQueriesCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudassetSavedQueriesCreateRequest struct {
    PathParams CloudassetSavedQueriesCreatePathParams 
    QueryParams CloudassetSavedQueriesCreateQueryParams 
    Request *shared.SavedQuery `request:"mediaType=application/json"`
    Security CloudassetSavedQueriesCreateSecurity 
    
}

type CloudassetSavedQueriesCreateResponse struct {
    ContentType string 
    SavedQuery *shared.SavedQuery 
    StatusCode int64 
    
}

