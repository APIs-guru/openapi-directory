package operations

import (
	"openapi/pkg/models/shared"
)

type StopTalkPathParams struct {
	UUID string `pathParam:"style=simple,explode=false,name=uuid"`
}

type StopTalkSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type StopTalkRequest struct {
	PathParams StopTalkPathParams
	Security   StopTalkSecurity
}

type StopTalkResponse struct {
	ContentType      string
	StatusCode       int64
	StopTalkResponse *shared.StopTalkResponse
}
