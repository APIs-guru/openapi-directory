package operations



type GetActionPackageSearchQueryParams struct {
    Q *string `queryParam:"style=form,explode=true,name=q"`
    
}

type GetActionPackageSearchRequest struct {
    QueryParams GetActionPackageSearchQueryParams 
    
}

type GetActionPackageSearchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

