package operations

import (
	"openapi/pkg/models/shared"
)

type ValidateRequestBody struct {
	Filename *string `multipartForm:"name=filename"`
	Source   *string `multipartForm:"name=source"`
}

type ValidateRequest struct {
	Request *ValidateRequestBody `request:"mediaType=multipart/form-data"`
}

type ValidateResponse struct {
	Body                          []byte
	ContentType                   string
	StatusCode                    int64
	Validate400ApplicationJSONAny *interface{}
	ValidationResult              *shared.ValidationResult
}
