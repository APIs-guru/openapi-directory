package operations

import (
"time"
"openapi/pkg/models/shared")

type GetKvPairsQueryParams struct {
    After *time.Time `queryParam:"style=form,explode=true,name=after"`
    AfterID *string `queryParam:"style=form,explode=true,name=after_id"`
    Before *string `queryParam:"style=form,explode=true,name=before"`
    BeforeID *string `queryParam:"style=form,explode=true,name=before_id"`
    From *string `queryParam:"style=form,explode=true,name=from"`
    FromID *string `queryParam:"style=form,explode=true,name=from_id"`
    ID *string `queryParam:"style=form,explode=true,name=id"`
    IDOnly *bool `queryParam:"style=form,explode=true,name=id_only"`
    KvKey *string `queryParam:"style=form,explode=true,name=kv_key"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Populate *string `queryParam:"style=form,explode=true,name=populate"`
    ResultsOnly *bool `queryParam:"style=form,explode=true,name=results_only"`
    Select *string `queryParam:"style=form,explode=true,name=select"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    TimeCreated *string `queryParam:"style=form,explode=true,name=time_created"`
    TimeUpdated *string `queryParam:"style=form,explode=true,name=time_updated"`
    TimeoutS *float64 `queryParam:"style=form,explode=true,name=timeout_s"`
    Until *string `queryParam:"style=form,explode=true,name=until"`
    UntilID *string `queryParam:"style=form,explode=true,name=until_id"`
    
}

type GetKvPairsRequest struct {
    QueryParams GetKvPairsQueryParams 
    
}

type GetKvPairs200ApplicationJSON struct {
    Count *int64 `json:"count,omitempty"`
    CountCurrent *int64 `json:"count_current,omitempty"`
    IsLimited *bool `json:"is_limited,omitempty"`
    NextURL *string `json:"next_url,omitempty"`
    QueryDurationMs *int64 `json:"query_duration_ms,omitempty"`
    Results []shared.KeyValuePair `json:"results,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type GetKvPairsResponse struct {
    ContentType string 
    StatusCode int64 
    GetKvPairs200ApplicationJSONObject *GetKvPairs200ApplicationJSON 
    
}

