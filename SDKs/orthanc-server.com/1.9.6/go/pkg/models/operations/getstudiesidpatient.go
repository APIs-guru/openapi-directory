package operations



type GetStudiesIDPatientPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetStudiesIDPatientQueryParams struct {
    Full *bool `queryParam:"style=form,explode=true,name=full"`
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    
}

type GetStudiesIDPatientRequest struct {
    PathParams GetStudiesIDPatientPathParams 
    QueryParams GetStudiesIDPatientQueryParams 
    
}

type GetStudiesIDPatientResponse struct {
    ContentType string 
    GetStudiesIDPatient200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

