package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfaceConnectionsListQueryParams struct {
	ConnectionStatus  *string `queryParam:"style=form,explode=true,name=connection_status"`
	ConnectionStatusN *string `queryParam:"style=form,explode=true,name=connection_status__n"`
	Device            *string `queryParam:"style=form,explode=true,name=device"`
	DeviceID          *string `queryParam:"style=form,explode=true,name=device_id"`
	Limit             *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset            *int64  `queryParam:"style=form,explode=true,name=offset"`
	Site              *string `queryParam:"style=form,explode=true,name=site"`
}

type DcimInterfaceConnectionsList200ApplicationJSON struct {
	Count    int64                        `json:"count"`
	Next     *string                      `json:"next,omitempty"`
	Previous *string                      `json:"previous,omitempty"`
	Results  []shared.InterfaceConnection `json:"results"`
}

type DcimInterfaceConnectionsListRequest struct {
	QueryParams DcimInterfaceConnectionsListQueryParams
}

type DcimInterfaceConnectionsListResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	DcimInterfaceConnectionsList200ApplicationJSONObject *DcimInterfaceConnectionsList200ApplicationJSON
}
