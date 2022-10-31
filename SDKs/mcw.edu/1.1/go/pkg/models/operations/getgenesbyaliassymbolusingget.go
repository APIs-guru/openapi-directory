package operations



type GetGenesByAliasSymbolUsingGetPathParams struct {
    AliasSymbol string `pathParam:"style=simple,explode=false,name=aliasSymbol"`
    SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
    
}

type GetGenesByAliasSymbolUsingGetRequest struct {
    PathParams GetGenesByAliasSymbolUsingGetPathParams 
    
}

type GetGenesByAliasSymbolUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

