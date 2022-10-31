package operations

import (
"time"
"openapi/pkg/models/shared")

type GetAPIVVersionMetalsSpotHistoryPathParams struct {
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type GetAPIVVersionMetalsSpotHistoryQueryParams struct {
    Currency *string `queryParam:"style=form,explode=true,name=currency"`
    End *time.Time `queryParam:"style=form,explode=true,name=end"`
    Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Historicalfx *bool `queryParam:"style=form,explode=true,name=historicalfx"`
    Interval *string `queryParam:"style=form,explode=true,name=interval"`
    Metals string `queryParam:"style=form,explode=true,name=metals"`
    Start time.Time `queryParam:"style=form,explode=true,name=start"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    Unitofmeasure *shared.UnitOfMeasureEnum `queryParam:"style=form,explode=true,name=unitofmeasure"`
    
}

type GetAPIVVersionMetalsSpotHistoryRequest struct {
    PathParams GetAPIVVersionMetalsSpotHistoryPathParams 
    QueryParams GetAPIVVersionMetalsSpotHistoryQueryParams 
    
}

type GetAPIVVersionMetalsSpotHistoryResponse struct {
    Body []byte 
    ContentType string 
    IntervalCollectionResponses []shared.IntervalCollectionResponse 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

