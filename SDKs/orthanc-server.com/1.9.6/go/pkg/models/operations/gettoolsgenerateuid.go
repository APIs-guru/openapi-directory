package operations



type GetToolsGenerateUIDQueryParams struct {
    Level string `queryParam:"style=form,explode=true,name=level"`
    
}

type GetToolsGenerateUIDRequest struct {
    QueryParams GetToolsGenerateUIDQueryParams 
    
}

type GetToolsGenerateUIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

