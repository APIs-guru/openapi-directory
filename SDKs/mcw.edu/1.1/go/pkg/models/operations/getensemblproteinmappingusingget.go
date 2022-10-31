package operations



type GetEnsemblProteinMappingUsingGetPathParams struct {
    RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
    
}

type GetEnsemblProteinMappingUsingGetRequest struct {
    PathParams GetEnsemblProteinMappingUsingGetPathParams 
    
}

type GetEnsemblProteinMappingUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

