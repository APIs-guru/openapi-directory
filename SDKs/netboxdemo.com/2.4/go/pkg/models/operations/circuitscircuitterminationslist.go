package operations

import (
"openapi/pkg/models/shared")

type CircuitsCircuitTerminationsListQueryParams struct {
    CircuitID *string `queryParam:"style=form,explode=true,name=circuit_id"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    PortSpeed *float64 `queryParam:"style=form,explode=true,name=port_speed"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Site *string `queryParam:"style=form,explode=true,name=site"`
    SiteID *string `queryParam:"style=form,explode=true,name=site_id"`
    TermSide *string `queryParam:"style=form,explode=true,name=term_side"`
    UpstreamSpeed *float64 `queryParam:"style=form,explode=true,name=upstream_speed"`
    XconnectID *string `queryParam:"style=form,explode=true,name=xconnect_id"`
    
}

type CircuitsCircuitTerminationsListRequest struct {
    QueryParams CircuitsCircuitTerminationsListQueryParams 
    
}

type CircuitsCircuitTerminationsList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.CircuitTermination `json:"results"`
    
}

type CircuitsCircuitTerminationsListResponse struct {
    ContentType string 
    StatusCode int64 
    CircuitsCircuitTerminationsList200ApplicationJSONObject *CircuitsCircuitTerminationsList200ApplicationJSON 
    
}

