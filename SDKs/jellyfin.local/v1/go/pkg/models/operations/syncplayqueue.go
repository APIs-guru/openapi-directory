package operations

import (
	"openapi/pkg/models/shared"
)

type SyncPlayQueueRequests struct {
	QueueRequestDto  *shared.QueueRequestDto `request:"mediaType=application/*+json"`
	QueueRequestDto1 *shared.QueueRequestDto `request:"mediaType=application/json"`
	QueueRequestDto2 *shared.QueueRequestDto `request:"mediaType=text/json"`
}

type SyncPlayQueueSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SyncPlayQueueRequest struct {
	Request  SyncPlayQueueRequests
	Security SyncPlayQueueSecurity
}

type SyncPlayQueueResponse struct {
	ContentType string
	StatusCode  int64
}
