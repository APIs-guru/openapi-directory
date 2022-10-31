package operations



type LicensesReadPathParams struct {
    LicenseID string `pathParam:"style=simple,explode=false,name=license_id"`
    
}

type LicensesReadRequest struct {
    PathParams LicensesReadPathParams 
    
}

type LicensesReadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

