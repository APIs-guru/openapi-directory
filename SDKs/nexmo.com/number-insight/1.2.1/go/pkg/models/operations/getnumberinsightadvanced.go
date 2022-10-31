package operations

import (
"openapi/pkg/models/shared")

type GetNumberInsightAdvancedPathParams struct {
    Format shared.FormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type GetNumberInsightAdvancedQueryParams struct {
    Cnam *bool `queryParam:"style=form,explode=true,name=cnam"`
    Country *string `queryParam:"style=form,explode=true,name=country"`
    IP *string `queryParam:"style=form,explode=true,name=ip"`
    Number string `queryParam:"style=form,explode=true,name=number"`
    RealTimeData *bool `queryParam:"style=form,explode=true,name=real_time_data"`
    
}

type GetNumberInsightAdvancedRequest struct {
    PathParams GetNumberInsightAdvancedPathParams 
    QueryParams GetNumberInsightAdvancedQueryParams 
    
}

type GetNumberInsightAdvancedResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    GetNumberInsightAdvanced200ApplicationJSONOneOf *interface{} 
    
}

