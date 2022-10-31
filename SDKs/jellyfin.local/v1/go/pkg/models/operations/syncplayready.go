package operations

import (
	"openapi/pkg/models/shared"
)

type SyncPlayReadyRequests struct {
	ReadyRequestDto  *shared.ReadyRequestDto `request:"mediaType=application/*+json"`
	ReadyRequestDto1 *shared.ReadyRequestDto `request:"mediaType=application/json"`
	ReadyRequestDto2 *shared.ReadyRequestDto `request:"mediaType=text/json"`
}

type SyncPlayReadySecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SyncPlayReadyRequest struct {
	Request  SyncPlayReadyRequests
	Security SyncPlayReadySecurity
}

type SyncPlayReadyResponse struct {
	ContentType string
	StatusCode  int64
}
