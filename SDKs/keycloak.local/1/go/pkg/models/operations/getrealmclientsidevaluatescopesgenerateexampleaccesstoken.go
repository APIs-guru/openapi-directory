package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenQueryParams struct {
    Scope *string `queryParam:"style=form,explode=true,name=scope"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenRequest struct {
    PathParams GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenPathParams 
    QueryParams GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenQueryParams 
    
}

type GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenResponse struct {
    AccessToken *shared.AccessToken 
    ContentType string 
    StatusCode int64 
    
}

