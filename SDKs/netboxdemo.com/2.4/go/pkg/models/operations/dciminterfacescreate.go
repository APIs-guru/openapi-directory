package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfacesCreateRequest struct {
	Request shared.WritableInterfaceInput `request:"mediaType=application/json"`
}

type DcimInterfacesCreateResponse struct {
	ContentType string
	Interface   *shared.Interface
	StatusCode  int64
}
