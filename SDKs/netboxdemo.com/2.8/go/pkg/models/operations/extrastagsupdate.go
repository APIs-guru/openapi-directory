package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasTagsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ExtrasTagsUpdateRequest struct {
	PathParams ExtrasTagsUpdatePathParams
	Request    shared.TagInput `request:"mediaType=application/json"`
}

type ExtrasTagsUpdateResponse struct {
	ContentType string
	StatusCode  int64
	Tag         *shared.Tag
}
