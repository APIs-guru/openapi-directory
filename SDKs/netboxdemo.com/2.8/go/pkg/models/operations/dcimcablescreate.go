package operations

import (
	"openapi/pkg/models/shared"
)

type DcimCablesCreateRequest struct {
	Request shared.WritableCableInput `request:"mediaType=application/json"`
}

type DcimCablesCreateResponse struct {
	Cable       *shared.Cable
	ContentType string
	StatusCode  int64
}
