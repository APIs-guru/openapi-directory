package operations



type GetChromosomesByAssemblyUsingGetPathParams struct {
    MapKey int32 `pathParam:"style=simple,explode=false,name=mapKey"`
    
}

type GetChromosomesByAssemblyUsingGetRequest struct {
    PathParams GetChromosomesByAssemblyUsingGetPathParams 
    
}

type GetChromosomesByAssemblyUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

