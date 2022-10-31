package operations

import (
"openapi/pkg/models/shared")

type GetMostemailedSectionTimePeriodJSONPathParams struct {
    Section shared.SectionEnum `pathParam:"style=simple,explode=false,name=section"`
    TimePeriod shared.TimePeriodEnum `pathParam:"style=simple,explode=false,name=time-period"`
    
}

type GetMostemailedSectionTimePeriodJSONSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetMostemailedSectionTimePeriodJSONRequest struct {
    PathParams GetMostemailedSectionTimePeriodJSONPathParams 
    Security GetMostemailedSectionTimePeriodJSONSecurity 
    
}

type GetMostemailedSectionTimePeriodJSON200ApplicationJSON struct {
    Copyright *string `json:"copyright,omitempty"`
    NumResults *int64 `json:"num_results,omitempty"`
    Results []shared.ArticleWithCountType `json:"results,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

type GetMostemailedSectionTimePeriodJSON400ApplicationJSON struct {
    Copyright *string `json:"copyright,omitempty"`
    Errors []string `json:"errors,omitempty"`
    Results []interface{} `json:"results,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

type GetMostemailedSectionTimePeriodJSONResponse struct {
    Body []byte 
    ContentType string 
    GetMostemailedSectionTimePeriodJSON200ApplicationJSONObject *GetMostemailedSectionTimePeriodJSON200ApplicationJSON 
    GetMostemailedSectionTimePeriodJSON400ApplicationJSONObject *GetMostemailedSectionTimePeriodJSON400ApplicationJSON 
    GetMostemailedSectionTimePeriodJSON403ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

