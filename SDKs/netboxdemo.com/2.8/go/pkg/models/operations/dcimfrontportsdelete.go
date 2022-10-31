package operations



type DcimFrontPortsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimFrontPortsDeleteRequest struct {
    PathParams DcimFrontPortsDeletePathParams 
    
}

type DcimFrontPortsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

