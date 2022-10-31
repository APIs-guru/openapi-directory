package operations



type GetActionPackageActivityListHTMLQueryParams struct {
    ID *string `queryParam:"style=form,explode=true,name=id"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetActionPackageActivityListHTMLRequest struct {
    QueryParams GetActionPackageActivityListHTMLQueryParams 
    
}

type GetActionPackageActivityListHTMLResponse struct {
    ContentType string 
    StatusCode int64 
    
}

