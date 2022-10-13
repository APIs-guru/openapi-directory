package operations

import (
	"time"
)

type GetDeviceCameraVideoLinkPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type GetDeviceCameraVideoLinkQueryParams struct {
	Timestamp *time.Time `queryParam:"style=form,explode=true,name=timestamp"`
}

type GetDeviceCameraVideoLinkRequest struct {
	PathParams  GetDeviceCameraVideoLinkPathParams
	QueryParams GetDeviceCameraVideoLinkQueryParams
}

type GetDeviceCameraVideoLinkResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetDeviceCameraVideoLink200ApplicationJSONObject map[string]interface{}
}
