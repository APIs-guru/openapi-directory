package operations

import (
	"openapi/pkg/models/shared"
)

type ListServicesResponse struct {
	ContentType          string
	ErrorModel           *shared.ErrorModel
	ListServicesResponse *shared.ListServicesResponse
	StatusCode           int64
}
