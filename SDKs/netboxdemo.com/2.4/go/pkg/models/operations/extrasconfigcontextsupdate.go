package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasConfigContextsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ExtrasConfigContextsUpdateRequest struct {
	PathParams ExtrasConfigContextsUpdatePathParams
	Request    shared.WritableConfigContextInput `request:"mediaType=application/json"`
}

type ExtrasConfigContextsUpdateResponse struct {
	ConfigContext *shared.ConfigContext
	ContentType   string
	StatusCode    int64
}
