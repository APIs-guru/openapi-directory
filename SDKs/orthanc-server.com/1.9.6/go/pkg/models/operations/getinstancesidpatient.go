package operations



type GetInstancesIDPatientPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetInstancesIDPatientQueryParams struct {
    Full *bool `queryParam:"style=form,explode=true,name=full"`
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    
}

type GetInstancesIDPatientRequest struct {
    PathParams GetInstancesIDPatientPathParams 
    QueryParams GetInstancesIDPatientQueryParams 
    
}

type GetInstancesIDPatientResponse struct {
    ContentType string 
    GetInstancesIDPatient200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

