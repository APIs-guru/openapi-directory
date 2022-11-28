package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfaceConnectionsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimInterfaceConnectionsPartialUpdateRequest struct {
	PathParams DcimInterfaceConnectionsPartialUpdatePathParams
	Request    shared.WritableInterfaceConnectionInput `request:"mediaType=application/json"`
}

type DcimInterfaceConnectionsPartialUpdateResponse struct {
	ContentType         string
	InterfaceConnection *shared.InterfaceConnection
	StatusCode          int64
}
