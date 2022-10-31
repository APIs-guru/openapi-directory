package operations



type PostSeriesIDModifyPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostSeriesIDModifyRequest struct {
    PathParams PostSeriesIDModifyPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostSeriesIDModifyResponse struct {
    ContentType string 
    PostSeriesIDModify200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

