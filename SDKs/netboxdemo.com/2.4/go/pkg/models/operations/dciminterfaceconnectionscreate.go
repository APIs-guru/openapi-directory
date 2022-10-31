package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfaceConnectionsCreateRequest struct {
	Request shared.WritableInterfaceConnection `request:"mediaType=application/json"`
}

type DcimInterfaceConnectionsCreateResponse struct {
	ContentType         string
	InterfaceConnection *shared.InterfaceConnection
	StatusCode          int64
}
