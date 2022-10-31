package operations



type DeletePatientsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeletePatientsIDRequest struct {
    PathParams DeletePatientsIDPathParams 
    
}

type DeletePatientsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

