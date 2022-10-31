package operations



type GetStudiesIDModulePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetStudiesIDModuleQueryParams struct {
    IgnoreLength []string `queryParam:"style=form,explode=true,name=ignore-length"`
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    Simplify *bool `queryParam:"style=form,explode=true,name=simplify"`
    
}

type GetStudiesIDModuleRequest struct {
    PathParams GetStudiesIDModulePathParams 
    QueryParams GetStudiesIDModuleQueryParams 
    
}

type GetStudiesIDModuleResponse struct {
    ContentType string 
    GetStudiesIDModule200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

