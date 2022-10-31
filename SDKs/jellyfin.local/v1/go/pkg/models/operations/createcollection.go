package operations

import (
"openapi/pkg/models/shared")

type CreateCollectionQueryParams struct {
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    IsLocked *bool `queryParam:"style=form,explode=true,name=isLocked"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    ParentID *string `queryParam:"style=form,explode=true,name=parentId"`
    
}

type CreateCollectionSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type CreateCollectionRequest struct {
    QueryParams CreateCollectionQueryParams 
    Security CreateCollectionSecurity 
    
}

type CreateCollectionResponse struct {
    CollectionCreationResult *shared.CollectionCreationResult 
    ContentType string 
    StatusCode int64 
    
}

