package operations

import (
	"openapi/pkg/models/shared"
)

type SyncPlaySetPlaylistItemRequests struct {
	SetPlaylistItemRequestDto  *shared.SetPlaylistItemRequestDto `request:"mediaType=application/*+json"`
	SetPlaylistItemRequestDto1 *shared.SetPlaylistItemRequestDto `request:"mediaType=application/json"`
	SetPlaylistItemRequestDto2 *shared.SetPlaylistItemRequestDto `request:"mediaType=text/json"`
}

type SyncPlaySetPlaylistItemSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SyncPlaySetPlaylistItemRequest struct {
	Request  SyncPlaySetPlaylistItemRequests
	Security SyncPlaySetPlaylistItemSecurity
}

type SyncPlaySetPlaylistItemResponse struct {
	ContentType string
	StatusCode  int64
}
