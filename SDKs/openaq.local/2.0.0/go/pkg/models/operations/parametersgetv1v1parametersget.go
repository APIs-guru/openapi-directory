package operations

import (
"openapi/pkg/models/shared")

type ParametersGetv1V1ParametersGetQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    OrderBy *interface{} `queryParam:"style=form,explode=true,name=order_by"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Sort *shared.SortEnum `queryParam:"style=form,explode=true,name=sort"`
    SourceID []int64 `queryParam:"style=form,explode=true,name=sourceId"`
    SourceName []string `queryParam:"style=form,explode=true,name=sourceName"`
    SourceSlug []string `queryParam:"style=form,explode=true,name=sourceSlug"`
    
}

type ParametersGetv1V1ParametersGetRequest struct {
    QueryParams ParametersGetv1V1ParametersGetQueryParams 
    
}

type ParametersGetv1V1ParametersGetResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    OpenAqParametersResult *shared.OpenAqParametersResult 
    StatusCode int64 
    
}

