package operations



type PutPatientsIDProtectedPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutPatientsIDProtectedRequest struct {
    PathParams PutPatientsIDProtectedPathParams 
    
}

type PutPatientsIDProtectedResponse struct {
    ContentType string 
    StatusCode int64 
    
}

