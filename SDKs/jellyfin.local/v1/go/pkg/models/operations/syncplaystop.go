package operations

import (
	"openapi/pkg/models/shared"
)

type SyncPlayStopSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SyncPlayStopRequest struct {
	Security SyncPlayStopSecurity
}

type SyncPlayStopResponse struct {
	ContentType string
	StatusCode  int64
}
