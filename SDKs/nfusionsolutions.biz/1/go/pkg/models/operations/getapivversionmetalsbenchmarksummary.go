package operations

import (
"openapi/pkg/models/shared")

type GetAPIVVersionMetalsBenchmarkSummaryPathParams struct {
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type GetAPIVVersionMetalsBenchmarkSummaryQueryParams struct {
    Currency *string `queryParam:"style=form,explode=true,name=currency"`
    Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Metals string `queryParam:"style=form,explode=true,name=metals"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    Unitofmeasure *shared.UnitOfMeasureEnum `queryParam:"style=form,explode=true,name=unitofmeasure"`
    
}

type GetAPIVVersionMetalsBenchmarkSummaryRequest struct {
    PathParams GetAPIVVersionMetalsBenchmarkSummaryPathParams 
    QueryParams GetAPIVVersionMetalsBenchmarkSummaryQueryParams 
    
}

type GetAPIVVersionMetalsBenchmarkSummaryResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    SummaryResponses []shared.SummaryResponse 
    
}

