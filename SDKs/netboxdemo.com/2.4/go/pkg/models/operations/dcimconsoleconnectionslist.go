package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsoleConnectionsListQueryParams struct {
	ConnectionStatus *string `queryParam:"style=form,explode=true,name=connection_status"`
	Device           *string `queryParam:"style=form,explode=true,name=device"`
	Limit            *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name             *string `queryParam:"style=form,explode=true,name=name"`
	Offset           *int64  `queryParam:"style=form,explode=true,name=offset"`
	Site             *string `queryParam:"style=form,explode=true,name=site"`
}

type DcimConsoleConnectionsList200ApplicationJSON struct {
	Count    int64                `json:"count"`
	Next     *string              `json:"next,omitempty"`
	Previous *string              `json:"previous,omitempty"`
	Results  []shared.ConsolePort `json:"results"`
}

type DcimConsoleConnectionsListRequest struct {
	QueryParams DcimConsoleConnectionsListQueryParams
}

type DcimConsoleConnectionsListResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	DcimConsoleConnectionsList200ApplicationJSONObject *DcimConsoleConnectionsList200ApplicationJSON
}
