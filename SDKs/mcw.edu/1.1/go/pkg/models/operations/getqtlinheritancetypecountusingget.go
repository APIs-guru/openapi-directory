package operations



type GetQtlInheritanceTypeCountUsingGetPathParams struct {
    DateYyyymmdd string `pathParam:"style=simple,explode=false,name=dateYYYYMMDD"`
    SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
    
}

type GetQtlInheritanceTypeCountUsingGetRequest struct {
    PathParams GetQtlInheritanceTypeCountUsingGetPathParams 
    
}

type GetQtlInheritanceTypeCountUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

