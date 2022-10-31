package operations



type GetChromosomeByAssemblyUsingGetPathParams struct {
    Chromosome string `pathParam:"style=simple,explode=false,name=chromosome"`
    MapKey int32 `pathParam:"style=simple,explode=false,name=mapKey"`
    
}

type GetChromosomeByAssemblyUsingGetRequest struct {
    PathParams GetChromosomeByAssemblyUsingGetPathParams 
    
}

type GetChromosomeByAssemblyUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

