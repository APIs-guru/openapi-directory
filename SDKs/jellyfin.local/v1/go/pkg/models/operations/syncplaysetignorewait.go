package operations

import (
	"openapi/pkg/models/shared"
)

type SyncPlaySetIgnoreWaitRequests struct {
	IgnoreWaitRequestDto  *shared.IgnoreWaitRequestDto `request:"mediaType=application/*+json"`
	IgnoreWaitRequestDto1 *shared.IgnoreWaitRequestDto `request:"mediaType=application/json"`
	IgnoreWaitRequestDto2 *shared.IgnoreWaitRequestDto `request:"mediaType=text/json"`
}

type SyncPlaySetIgnoreWaitSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SyncPlaySetIgnoreWaitRequest struct {
	Request  SyncPlaySetIgnoreWaitRequests
	Security SyncPlaySetIgnoreWaitSecurity
}

type SyncPlaySetIgnoreWaitResponse struct {
	ContentType string
	StatusCode  int64
}
