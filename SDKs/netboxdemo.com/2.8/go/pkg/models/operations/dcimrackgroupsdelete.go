package operations



type DcimRackGroupsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimRackGroupsDeleteRequest struct {
    PathParams DcimRackGroupsDeletePathParams 
    
}

type DcimRackGroupsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

