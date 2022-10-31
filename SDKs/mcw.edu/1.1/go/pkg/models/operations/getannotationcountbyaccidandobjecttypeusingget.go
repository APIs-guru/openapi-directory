package operations



type GetAnnotationCountByAccIDAndObjectTypeUsingGetPathParams struct {
    AccID string `pathParam:"style=simple,explode=false,name=accId"`
    IncludeChildren bool `pathParam:"style=simple,explode=false,name=includeChildren"`
    ObjectType int32 `pathParam:"style=simple,explode=false,name=objectType"`
    SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
    
}

type GetAnnotationCountByAccIDAndObjectTypeUsingGetRequest struct {
    PathParams GetAnnotationCountByAccIDAndObjectTypeUsingGetPathParams 
    
}

type GetAnnotationCountByAccIDAndObjectTypeUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

