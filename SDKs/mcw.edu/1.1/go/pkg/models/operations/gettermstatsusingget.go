package operations



type GetTermStatsUsingGetPathParams struct {
    AccID string `pathParam:"style=simple,explode=false,name=accId"`
    FilterAccID string `pathParam:"style=simple,explode=false,name=filterAccId"`
    
}

type GetTermStatsUsingGetRequest struct {
    PathParams GetTermStatsUsingGetPathParams 
    
}

type GetTermStatsUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

