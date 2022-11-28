package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerConnectionsListQueryParams struct {
	ConnectionStatus *string `queryParam:"style=form,explode=true,name=connection_status"`
	Device           *string `queryParam:"style=form,explode=true,name=device"`
	Limit            *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name             *string `queryParam:"style=form,explode=true,name=name"`
	Offset           *int64  `queryParam:"style=form,explode=true,name=offset"`
	Site             *string `queryParam:"style=form,explode=true,name=site"`
}

type DcimPowerConnectionsList200ApplicationJSON struct {
	Count    int64              `json:"count"`
	Next     *string            `json:"next,omitempty"`
	Previous *string            `json:"previous,omitempty"`
	Results  []shared.PowerPort `json:"results"`
}

type DcimPowerConnectionsListRequest struct {
	QueryParams DcimPowerConnectionsListQueryParams
}

type DcimPowerConnectionsListResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DcimPowerConnectionsList200ApplicationJSONObject *DcimPowerConnectionsList200ApplicationJSON
}
