package operations

import (
	"openapi/pkg/models/shared"
)

type AvailableServicesResponse struct {
	APIServicesOut *shared.APIServicesOut
	ContentType    string
	StatusCode     int64
}
