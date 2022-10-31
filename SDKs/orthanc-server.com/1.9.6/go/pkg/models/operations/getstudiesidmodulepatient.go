package operations



type GetStudiesIDModulePatientPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetStudiesIDModulePatientQueryParams struct {
    IgnoreLength []string `queryParam:"style=form,explode=true,name=ignore-length"`
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    Simplify *bool `queryParam:"style=form,explode=true,name=simplify"`
    
}

type GetStudiesIDModulePatientRequest struct {
    PathParams GetStudiesIDModulePatientPathParams 
    QueryParams GetStudiesIDModulePatientQueryParams 
    
}

type GetStudiesIDModulePatientResponse struct {
    ContentType string 
    GetStudiesIDModulePatient200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

