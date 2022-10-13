package operations

import (
	"openapi/pkg/models/shared"
)

type SearchRemoteSubtitlesPathParams struct {
	ItemID   string `pathParam:"style=simple,explode=false,name=itemId"`
	Language string `pathParam:"style=simple,explode=false,name=language"`
}

type SearchRemoteSubtitlesQueryParams struct {
	IsPerfectMatch *bool `queryParam:"style=form,explode=true,name=isPerfectMatch"`
}

type SearchRemoteSubtitlesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SearchRemoteSubtitlesRequest struct {
	PathParams  SearchRemoteSubtitlesPathParams
	QueryParams SearchRemoteSubtitlesQueryParams
	Security    SearchRemoteSubtitlesSecurity
}

type SearchRemoteSubtitlesResponse struct {
	ContentType         string
	RemoteSubtitleInfos []shared.RemoteSubtitleInfo
	StatusCode          int64
}
