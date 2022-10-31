package operations



type GetActionPackageActivityListQueryParams struct {
    ID *string `queryParam:"style=form,explode=true,name=id"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetActionPackageActivityListRequest struct {
    QueryParams GetActionPackageActivityListQueryParams 
    
}

type GetActionPackageActivityListResponse struct {
    ContentType string 
    StatusCode int64 
    
}

