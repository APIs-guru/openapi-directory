package operations

import (
"time"
"openapi/pkg/models/shared")

type GetAPIVVersionMetalsSpotRatioHistoryPathParams struct {
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type GetAPIVVersionMetalsSpotRatioHistoryQueryParams struct {
    End *time.Time `queryParam:"style=form,explode=true,name=end"`
    Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Interval *string `queryParam:"style=form,explode=true,name=interval"`
    Pairs string `queryParam:"style=form,explode=true,name=pairs"`
    Start time.Time `queryParam:"style=form,explode=true,name=start"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type GetAPIVVersionMetalsSpotRatioHistoryRequest struct {
    PathParams GetAPIVVersionMetalsSpotRatioHistoryPathParams 
    QueryParams GetAPIVVersionMetalsSpotRatioHistoryQueryParams 
    
}

type GetAPIVVersionMetalsSpotRatioHistoryResponse struct {
    Body []byte 
    ContentType string 
    IntervalCollectionResponses []shared.IntervalCollectionResponse 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

