package operations

import (
	"openapi/pkg/models/shared"
)

type GetCallPathParams struct {
	UUID string `pathParam:"style=simple,explode=false,name=uuid"`
}

type GetCallSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetCallRequest struct {
	PathParams GetCallPathParams
	Security   GetCallSecurity
}

type GetCallResponse struct {
	ContentType     string
	GetCallResponse *shared.GetCallResponse
	StatusCode      int64
}
