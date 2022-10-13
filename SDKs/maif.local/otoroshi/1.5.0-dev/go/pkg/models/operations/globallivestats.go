package operations

import (
	"openapi/pkg/models/shared"
)

type GlobalLiveStatsSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type GlobalLiveStatsRequest struct {
	Security GlobalLiveStatsSecurity
}

type GlobalLiveStatsResponse struct {
	ContentType string
	Stats       *shared.Stats
	StatusCode  int64
}
