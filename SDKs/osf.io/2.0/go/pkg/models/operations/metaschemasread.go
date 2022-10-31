package operations



type MetaschemasReadPathParams struct {
    MetaschemaID string `pathParam:"style=simple,explode=false,name=metaschema_id"`
    
}

type MetaschemasReadRequest struct {
    PathParams MetaschemasReadPathParams 
    
}

type MetaschemasReadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

