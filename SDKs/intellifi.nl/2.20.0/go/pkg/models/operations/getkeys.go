package operations

import (
"time"
"openapi/pkg/models/shared")

type GetKeysQueryParams struct {
    After *time.Time `queryParam:"style=form,explode=true,name=after"`
    AfterID *string `queryParam:"style=form,explode=true,name=after_id"`
    Before *string `queryParam:"style=form,explode=true,name=before"`
    BeforeID *string `queryParam:"style=form,explode=true,name=before_id"`
    From *string `queryParam:"style=form,explode=true,name=from"`
    FromID *string `queryParam:"style=form,explode=true,name=from_id"`
    ID *string `queryParam:"style=form,explode=true,name=id"`
    IDOnly *bool `queryParam:"style=form,explode=true,name=id_only"`
    IsReadOnly *bool `queryParam:"style=form,explode=true,name=is_read_only"`
    Label *string `queryParam:"style=form,explode=true,name=label"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Populate *string `queryParam:"style=form,explode=true,name=populate"`
    ResultsOnly *bool `queryParam:"style=form,explode=true,name=results_only"`
    Secret *string `queryParam:"style=form,explode=true,name=secret"`
    Select *string `queryParam:"style=form,explode=true,name=select"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    TimeCreated *string `queryParam:"style=form,explode=true,name=time_created"`
    TimeUpdated *string `queryParam:"style=form,explode=true,name=time_updated"`
    TimeoutS *float64 `queryParam:"style=form,explode=true,name=timeout_s"`
    Until *string `queryParam:"style=form,explode=true,name=until"`
    UntilID *string `queryParam:"style=form,explode=true,name=until_id"`
    
}

type GetKeysSecurity struct {
    CookieSid shared.SchemeCookieSid `security:"scheme,type=apiKey,subtype=cookie"`
    
}

type GetKeysRequest struct {
    QueryParams GetKeysQueryParams 
    Security GetKeysSecurity 
    
}

type GetKeys200ApplicationJSON struct {
    Count *int64 `json:"count,omitempty"`
    CountCurrent *int64 `json:"count_current,omitempty"`
    IsLimited *bool `json:"is_limited,omitempty"`
    NextURL *string `json:"next_url,omitempty"`
    QueryDurationMs *int64 `json:"query_duration_ms,omitempty"`
    Results []shared.Key `json:"results,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type GetKeysResponse struct {
    ContentType string 
    StatusCode int64 
    GetKeys200ApplicationJSONObject *GetKeys200ApplicationJSON 
    
}

