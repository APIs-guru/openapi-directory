package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConnectedDeviceListQueryParams struct {
	PeerDevice    string `queryParam:"style=form,explode=true,name=peer_device"`
	PeerInterface string `queryParam:"style=form,explode=true,name=peer_interface"`
}

type DcimConnectedDeviceListRequest struct {
	QueryParams DcimConnectedDeviceListQueryParams
}

type DcimConnectedDeviceListResponse struct {
	ContentType string
	Device      *shared.Device
	StatusCode  int64
}
