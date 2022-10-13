package operations

import (
	"openapi/pkg/models/shared"
)

type SyncPlaySetShuffleModeRequests struct {
	SetShuffleModeRequestDto  *shared.SetShuffleModeRequestDto `request:"mediaType=application/*+json"`
	SetShuffleModeRequestDto1 *shared.SetShuffleModeRequestDto `request:"mediaType=application/json"`
	SetShuffleModeRequestDto2 *shared.SetShuffleModeRequestDto `request:"mediaType=text/json"`
}

type SyncPlaySetShuffleModeSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SyncPlaySetShuffleModeRequest struct {
	Request  SyncPlaySetShuffleModeRequests
	Security SyncPlaySetShuffleModeSecurity
}

type SyncPlaySetShuffleModeResponse struct {
	ContentType string
	StatusCode  int64
}
