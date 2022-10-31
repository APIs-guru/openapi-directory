package operations

import (
	"openapi/pkg/models/shared"
)

type SyncPlaySeekRequests struct {
	SeekRequestDto  *shared.SeekRequestDto `request:"mediaType=application/*+json"`
	SeekRequestDto1 *shared.SeekRequestDto `request:"mediaType=application/json"`
	SeekRequestDto2 *shared.SeekRequestDto `request:"mediaType=text/json"`
}

type SyncPlaySeekSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SyncPlaySeekRequest struct {
	Request  SyncPlaySeekRequests
	Security SyncPlaySeekSecurity
}

type SyncPlaySeekResponse struct {
	ContentType string
	StatusCode  int64
}
