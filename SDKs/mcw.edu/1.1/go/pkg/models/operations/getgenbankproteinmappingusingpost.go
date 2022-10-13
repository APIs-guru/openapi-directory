package operations

import (
	"openapi/pkg/models/shared"
)

type GetGenBankProteinMappingUsingPostRequest struct {
	Request *shared.RgdidListRequest `request:"mediaType=application/json"`
}

type GetGenBankProteinMappingUsingPostResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
