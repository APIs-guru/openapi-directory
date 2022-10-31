package operations




type GetStatsSeriesPeriodFieldsPeriodEnum string

const (
    GetStatsSeriesPeriodFieldsPeriodEnumDay GetStatsSeriesPeriodFieldsPeriodEnum = "day"
GetStatsSeriesPeriodFieldsPeriodEnumMonth GetStatsSeriesPeriodFieldsPeriodEnum = "month"
)


type GetStatsSeriesPeriodFieldsPathParams struct {
    Fields string `pathParam:"style=simple,explode=false,name=fields"`
    Period GetStatsSeriesPeriodFieldsPeriodEnum `pathParam:"style=simple,explode=false,name=period"`
    
}

type GetStatsSeriesPeriodFieldsQueryParams struct {
    End *int64 `queryParam:"style=form,explode=true,name=end"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Start *int64 `queryParam:"style=form,explode=true,name=start"`
    
}

type GetStatsSeriesPeriodFieldsRequest struct {
    PathParams GetStatsSeriesPeriodFieldsPathParams 
    QueryParams GetStatsSeriesPeriodFieldsQueryParams 
    
}

type GetStatsSeriesPeriodFieldsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

