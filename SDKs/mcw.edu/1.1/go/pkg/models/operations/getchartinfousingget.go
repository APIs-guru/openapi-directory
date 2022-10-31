package operations



type GetChartInfoUsingGetPathParams struct {
    RefRgdID int32 `pathParam:"style=simple,explode=false,name=refRgdId"`
    SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
    TermString string `pathParam:"style=simple,explode=false,name=termString"`
    
}

type GetChartInfoUsingGetRequest struct {
    PathParams GetChartInfoUsingGetPathParams 
    
}

type GetChartInfoUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

