package operations

import (
"openapi/pkg/models/shared")

type GetAPIVVersionMetalsSpotPerformanceAnnualPathParams struct {
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type GetAPIVVersionMetalsSpotPerformanceAnnualQueryParams struct {
    Currency *string `queryParam:"style=form,explode=true,name=currency"`
    Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Metals string `queryParam:"style=form,explode=true,name=metals"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    Unitofmeasure *shared.UnitOfMeasureEnum `queryParam:"style=form,explode=true,name=unitofmeasure"`
    Years *int32 `queryParam:"style=form,explode=true,name=years"`
    
}

type GetAPIVVersionMetalsSpotPerformanceAnnualRequest struct {
    PathParams GetAPIVVersionMetalsSpotPerformanceAnnualPathParams 
    QueryParams GetAPIVVersionMetalsSpotPerformanceAnnualQueryParams 
    
}

type GetAPIVVersionMetalsSpotPerformanceAnnualResponse struct {
    Body []byte 
    ContentType string 
    IntervalCollectionResponses []shared.IntervalCollectionResponse 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

