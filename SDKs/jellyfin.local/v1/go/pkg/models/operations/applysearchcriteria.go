package operations

import (
"openapi/pkg/models/shared")

type ApplySearchCriteriaPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type ApplySearchCriteriaQueryParams struct {
    ReplaceAllImages *bool `queryParam:"style=form,explode=true,name=replaceAllImages"`
    
}

type ApplySearchCriteriaRequests struct {
    RemoteSearchResult *shared.RemoteSearchResult `request:"mediaType=application/*+json"`
    RemoteSearchResult1 *shared.RemoteSearchResult `request:"mediaType=application/json"`
    RemoteSearchResult2 *shared.RemoteSearchResult `request:"mediaType=text/json"`
    
}

type ApplySearchCriteriaSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type ApplySearchCriteriaRequest struct {
    PathParams ApplySearchCriteriaPathParams 
    QueryParams ApplySearchCriteriaQueryParams 
    Request ApplySearchCriteriaRequests 
    Security ApplySearchCriteriaSecurity 
    
}

type ApplySearchCriteriaResponse struct {
    ContentType string 
    StatusCode int64 
    
}

