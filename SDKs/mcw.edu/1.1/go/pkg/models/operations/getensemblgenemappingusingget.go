package operations



type GetEnsemblGeneMappingUsingGetPathParams struct {
    RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
    
}

type GetEnsemblGeneMappingUsingGetRequest struct {
    PathParams GetEnsemblGeneMappingUsingGetPathParams 
    
}

type GetEnsemblGeneMappingUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

