package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectQueryParams struct {
	Secret string `queryParam:"style=form,explode=true,name=secret"`
}

type ConnectRequest struct {
	QueryParams ConnectQueryParams
}

type ConnectResponse struct {
	ContentType        string
	ProblemDetails     map[string]interface{}
	QuickConnectResult *shared.QuickConnectResult
	StatusCode         int64
}
