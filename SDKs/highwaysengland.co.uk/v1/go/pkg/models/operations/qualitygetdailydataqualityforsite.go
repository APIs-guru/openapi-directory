package operations

import (
"openapi/pkg/models/shared")

type QualityGetDailyDataQualityForSitePathParams struct {
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type QualityGetDailyDataQualityForSiteQueryParams struct {
    EndDate string `queryParam:"style=form,explode=true,name=end_date"`
    SiteID string `queryParam:"style=form,explode=true,name=siteId"`
    StartDate string `queryParam:"style=form,explode=true,name=start_date"`
    
}

type QualityGetDailyDataQualityForSiteRequest struct {
    PathParams QualityGetDailyDataQualityForSitePathParams 
    QueryParams QualityGetDailyDataQualityForSiteQueryParams 
    
}

type QualityGetDailyDataQualityForSiteResponse struct {
    ContentType string 
    DailyQualityResponse *shared.DailyQualityResponse 
    StatusCode int64 
    
}

