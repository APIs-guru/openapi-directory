package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasTagsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ExtrasTagsReadRequest struct {
	PathParams ExtrasTagsReadPathParams
}

type ExtrasTagsReadResponse struct {
	ContentType string
	StatusCode  int64
	Tag         *shared.Tag
}
