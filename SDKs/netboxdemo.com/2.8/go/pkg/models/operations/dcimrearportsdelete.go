package operations



type DcimRearPortsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimRearPortsDeleteRequest struct {
    PathParams DcimRearPortsDeletePathParams 
    
}

type DcimRearPortsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

