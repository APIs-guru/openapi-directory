package operations

import (
	"openapi/pkg/models/shared"
)

type DcimManufacturersCreateRequest struct {
	Request shared.ManufacturerInput `request:"mediaType=application/json"`
}

type DcimManufacturersCreateResponse struct {
	ContentType  string
	Manufacturer *shared.Manufacturer
	StatusCode   int64
}
