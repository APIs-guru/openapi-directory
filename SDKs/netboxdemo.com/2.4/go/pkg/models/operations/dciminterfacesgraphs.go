package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfacesGraphsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimInterfacesGraphsRequest struct {
	PathParams DcimInterfacesGraphsPathParams
}

type DcimInterfacesGraphsResponse struct {
	ContentType string
	Interface   *shared.Interface
	StatusCode  int64
}
