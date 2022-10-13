package operations

import (
	"openapi/pkg/models/shared"
)

type SyncPlaySetRepeatModeRequests struct {
	SetRepeatModeRequestDto  *shared.SetRepeatModeRequestDto `request:"mediaType=application/*+json"`
	SetRepeatModeRequestDto1 *shared.SetRepeatModeRequestDto `request:"mediaType=application/json"`
	SetRepeatModeRequestDto2 *shared.SetRepeatModeRequestDto `request:"mediaType=text/json"`
}

type SyncPlaySetRepeatModeSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SyncPlaySetRepeatModeRequest struct {
	Request  SyncPlaySetRepeatModeRequests
	Security SyncPlaySetRepeatModeSecurity
}

type SyncPlaySetRepeatModeResponse struct {
	ContentType string
	StatusCode  int64
}
