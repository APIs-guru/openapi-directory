package operations

import (
	"openapi/pkg/models/shared"
)

type ValidateURLQueryParams struct {
	URL string `queryParam:"style=form,explode=true,name=url"`
}

type ValidateURLRequest struct {
	QueryParams ValidateURLQueryParams
}

type ValidateURLResponse struct {
	Body             []byte
	ContentType      string
	StatusCode       int64
	ValidationResult *shared.ValidationResult
}
