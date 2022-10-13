package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteItemPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteItemRequest struct {
	PathParams DeleteItemPathParams
}

type DeleteItemResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
