package operations

import (
	"openapi/pkg/models/shared"
)

type StartStreamPathParams struct {
	UUID string `pathParam:"style=simple,explode=false,name=uuid"`
}

type StartStreamSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type StartStreamRequest struct {
	PathParams StartStreamPathParams
	Request    shared.StartStreamRequest `request:"mediaType=application/json"`
	Security   StartStreamSecurity
}

type StartStreamResponse struct {
	ContentType         string
	StartStreamResponse *shared.StartStreamResponse
	StatusCode          int64
}
