package operations



type GetActionPackageShowQueryParams struct {
    ID *string `queryParam:"style=form,explode=true,name=id"`
    
}

type GetActionPackageShowRequest struct {
    QueryParams GetActionPackageShowQueryParams 
    
}

type GetActionPackageShowResponse struct {
    ContentType string 
    StatusCode int64 
    
}

