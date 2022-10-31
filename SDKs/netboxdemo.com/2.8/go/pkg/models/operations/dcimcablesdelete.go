package operations



type DcimCablesDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimCablesDeleteRequest struct {
    PathParams DcimCablesDeletePathParams 
    
}

type DcimCablesDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

