package operations



type DcimManufacturersDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimManufacturersDeleteRequest struct {
    PathParams DcimManufacturersDeletePathParams 
    
}

type DcimManufacturersDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

