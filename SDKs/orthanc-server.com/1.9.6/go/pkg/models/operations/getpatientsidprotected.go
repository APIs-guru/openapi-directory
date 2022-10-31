package operations



type GetPatientsIDProtectedPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetPatientsIDProtectedRequest struct {
    PathParams GetPatientsIDProtectedPathParams 
    
}

type GetPatientsIDProtectedResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

