package operations

import (
	"openapi/pkg/models/shared"
)

type DcimManufacturersUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimManufacturersUpdateRequest struct {
	PathParams DcimManufacturersUpdatePathParams
	Request    shared.ManufacturerInput `request:"mediaType=application/json"`
}

type DcimManufacturersUpdateResponse struct {
	ContentType  string
	Manufacturer *shared.Manufacturer
	StatusCode   int64
}
