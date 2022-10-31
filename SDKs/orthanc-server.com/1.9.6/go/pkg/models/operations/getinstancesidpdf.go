package operations



type GetInstancesIDPdfPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetInstancesIDPdfRequest struct {
    PathParams GetInstancesIDPdfPathParams 
    
}

type GetInstancesIDPdfResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

