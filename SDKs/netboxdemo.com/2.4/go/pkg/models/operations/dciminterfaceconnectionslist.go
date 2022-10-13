package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfaceConnectionsListQueryParams struct {
	ConnectionStatus *string `queryParam:"style=form,explode=true,name=connection_status"`
	Device           *string `queryParam:"style=form,explode=true,name=device"`
	Limit            *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset           *int64  `queryParam:"style=form,explode=true,name=offset"`
	Site             *string `queryParam:"style=form,explode=true,name=site"`
}

type DcimInterfaceConnectionsListRequest struct {
	QueryParams DcimInterfaceConnectionsListQueryParams
}

type DcimInterfaceConnectionsList200ApplicationJSON struct {
	Count    int64                        `json:"count"`
	Next     *string                      `json:"next"`
	Previous *string                      `json:"previous"`
	Results  []shared.InterfaceConnection `json:"results"`
}

type DcimInterfaceConnectionsListResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	DcimInterfaceConnectionsList200ApplicationJSONObject *DcimInterfaceConnectionsList200ApplicationJSON
}
