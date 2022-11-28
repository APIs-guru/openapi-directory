package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsCircuitTerminationsListQueryParams struct {
	CircuitID        *string `queryParam:"style=form,explode=true,name=circuit_id"`
	CircuitIDN       *string `queryParam:"style=form,explode=true,name=circuit_id__n"`
	Limit            *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset           *int64  `queryParam:"style=form,explode=true,name=offset"`
	PortSpeed        *string `queryParam:"style=form,explode=true,name=port_speed"`
	PortSpeedGt      *string `queryParam:"style=form,explode=true,name=port_speed__gt"`
	PortSpeedGte     *string `queryParam:"style=form,explode=true,name=port_speed__gte"`
	PortSpeedLt      *string `queryParam:"style=form,explode=true,name=port_speed__lt"`
	PortSpeedLte     *string `queryParam:"style=form,explode=true,name=port_speed__lte"`
	PortSpeedN       *string `queryParam:"style=form,explode=true,name=port_speed__n"`
	Q                *string `queryParam:"style=form,explode=true,name=q"`
	Site             *string `queryParam:"style=form,explode=true,name=site"`
	SiteN            *string `queryParam:"style=form,explode=true,name=site__n"`
	SiteID           *string `queryParam:"style=form,explode=true,name=site_id"`
	SiteIDN          *string `queryParam:"style=form,explode=true,name=site_id__n"`
	TermSide         *string `queryParam:"style=form,explode=true,name=term_side"`
	TermSideN        *string `queryParam:"style=form,explode=true,name=term_side__n"`
	UpstreamSpeed    *string `queryParam:"style=form,explode=true,name=upstream_speed"`
	UpstreamSpeedGt  *string `queryParam:"style=form,explode=true,name=upstream_speed__gt"`
	UpstreamSpeedGte *string `queryParam:"style=form,explode=true,name=upstream_speed__gte"`
	UpstreamSpeedLt  *string `queryParam:"style=form,explode=true,name=upstream_speed__lt"`
	UpstreamSpeedLte *string `queryParam:"style=form,explode=true,name=upstream_speed__lte"`
	UpstreamSpeedN   *string `queryParam:"style=form,explode=true,name=upstream_speed__n"`
	XconnectID       *string `queryParam:"style=form,explode=true,name=xconnect_id"`
	XconnectIDIc     *string `queryParam:"style=form,explode=true,name=xconnect_id__ic"`
	XconnectIDIe     *string `queryParam:"style=form,explode=true,name=xconnect_id__ie"`
	XconnectIDIew    *string `queryParam:"style=form,explode=true,name=xconnect_id__iew"`
	XconnectIDIsw    *string `queryParam:"style=form,explode=true,name=xconnect_id__isw"`
	XconnectIDN      *string `queryParam:"style=form,explode=true,name=xconnect_id__n"`
	XconnectIDNic    *string `queryParam:"style=form,explode=true,name=xconnect_id__nic"`
	XconnectIDNie    *string `queryParam:"style=form,explode=true,name=xconnect_id__nie"`
	XconnectIDNiew   *string `queryParam:"style=form,explode=true,name=xconnect_id__niew"`
	XconnectIDNisw   *string `queryParam:"style=form,explode=true,name=xconnect_id__nisw"`
}

type CircuitsCircuitTerminationsList200ApplicationJSON struct {
	Count    int64                       `json:"count"`
	Next     *string                     `json:"next,omitempty"`
	Previous *string                     `json:"previous,omitempty"`
	Results  []shared.CircuitTermination `json:"results"`
}

type CircuitsCircuitTerminationsListRequest struct {
	QueryParams CircuitsCircuitTerminationsListQueryParams
}

type CircuitsCircuitTerminationsListResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	CircuitsCircuitTerminationsList200ApplicationJSONObject *CircuitsCircuitTerminationsList200ApplicationJSON
}
