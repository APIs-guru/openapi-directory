package operations

import (
	"openapi/pkg/models/shared"
)

type GetLiveTvInfoSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetLiveTvInfoRequest struct {
	Security GetLiveTvInfoSecurity
}

type GetLiveTvInfoResponse struct {
	ContentType string
	LiveTvInfo  *shared.LiveTvInfo
	StatusCode  int64
}
