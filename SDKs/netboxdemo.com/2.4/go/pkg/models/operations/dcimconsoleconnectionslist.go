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

type DcimConsoleConnectionsListRequest struct {
	QueryParams DcimConsoleConnectionsListQueryParams
}

type DcimConsoleConnectionsList200ApplicationJSON struct {
	Count    int64                `json:"count"`
	Next     *string              `json:"next"`
	Previous *string              `json:"previous"`
	Results  []shared.ConsolePort `json:"results"`
}

type DcimConsoleConnectionsListResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	DcimConsoleConnectionsList200ApplicationJSONObject *DcimConsoleConnectionsList200ApplicationJSON
}
