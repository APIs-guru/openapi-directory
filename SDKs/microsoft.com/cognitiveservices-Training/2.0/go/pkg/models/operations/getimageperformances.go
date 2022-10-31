package operations

import (
"openapi/pkg/models/shared")

type GetImagePerformancesPathParams struct {
    IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}


type GetImagePerformancesOrderByEnum string

const (
    GetImagePerformancesOrderByEnumNewest GetImagePerformancesOrderByEnum = "Newest"
GetImagePerformancesOrderByEnumOldest GetImagePerformancesOrderByEnum = "Oldest"
)


type GetImagePerformancesQueryParams struct {
    OrderBy *GetImagePerformancesOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
    Skip *int32 `queryParam:"style=form,explode=true,name=skip"`
    TagIds []string `queryParam:"style=form,explode=false,name=tagIds"`
    Take *int32 `queryParam:"style=form,explode=true,name=take"`
    
}

type GetImagePerformancesHeaders struct {
    TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
    
}

type GetImagePerformancesRequest struct {
    PathParams GetImagePerformancesPathParams 
    QueryParams GetImagePerformancesQueryParams 
    Headers GetImagePerformancesHeaders 
    
}

type GetImagePerformancesResponse struct {
    Body []byte 
    ContentType string 
    ImagePerformances []shared.ImagePerformance 
    StatusCode int64 
    
}

