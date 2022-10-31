package operations



type DcimRackRolesDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimRackRolesDeleteRequest struct {
    PathParams DcimRackRolesDeletePathParams 
    
}

type DcimRackRolesDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

