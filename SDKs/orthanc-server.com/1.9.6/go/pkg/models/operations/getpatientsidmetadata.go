package operations



type GetPatientsIDMetadataPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetPatientsIDMetadataQueryParams struct {
    Expand *string `queryParam:"style=form,explode=true,name=expand"`
    
}

type GetPatientsIDMetadataRequest struct {
    PathParams GetPatientsIDMetadataPathParams 
    QueryParams GetPatientsIDMetadataQueryParams 
    
}

type GetPatientsIDMetadataResponse struct {
    ContentType string 
    GetPatientsIDMetadata200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

