package operations



type DcimPowerOutletsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimPowerOutletsDeleteRequest struct {
    PathParams DcimPowerOutletsDeletePathParams 
    
}

type DcimPowerOutletsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

