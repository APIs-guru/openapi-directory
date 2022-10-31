package operations



type GetSeriesIDMetadataPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSeriesIDMetadataQueryParams struct {
    Expand *string `queryParam:"style=form,explode=true,name=expand"`
    
}

type GetSeriesIDMetadataRequest struct {
    PathParams GetSeriesIDMetadataPathParams 
    QueryParams GetSeriesIDMetadataQueryParams 
    
}

type GetSeriesIDMetadataResponse struct {
    ContentType string 
    GetSeriesIDMetadata200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

