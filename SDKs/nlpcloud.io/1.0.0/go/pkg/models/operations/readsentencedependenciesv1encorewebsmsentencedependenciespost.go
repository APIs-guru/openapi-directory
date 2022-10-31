package operations

import (
	"openapi/pkg/models/shared"
)

type ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostRequest struct {
	Request shared.UserRequestIn `request:"mediaType=application/json"`
}

type ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse struct {
	ContentType             string
	HTTPValidationError     *shared.HTTPValidationError
	SentenceDependenciesOut *shared.SentenceDependenciesOut
	StatusCode              int64
}
