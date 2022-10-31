package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteItemSetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteItemSetRequest struct {
	PathParams DeleteItemSetPathParams
}

type DeleteItemSetResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
