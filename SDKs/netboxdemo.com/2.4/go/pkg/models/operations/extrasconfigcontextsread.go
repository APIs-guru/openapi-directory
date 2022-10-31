package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasConfigContextsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ExtrasConfigContextsReadRequest struct {
	PathParams ExtrasConfigContextsReadPathParams
}

type ExtrasConfigContextsReadResponse struct {
	ConfigContext *shared.ConfigContext
	ContentType   string
	StatusCode    int64
}
