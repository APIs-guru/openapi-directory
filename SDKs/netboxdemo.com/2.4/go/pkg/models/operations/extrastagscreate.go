package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasTagsCreateRequest struct {
	Request shared.TagInput `request:"mediaType=application/json"`
}

type ExtrasTagsCreateResponse struct {
	ContentType string
	StatusCode  int64
	Tag         *shared.Tag
}
