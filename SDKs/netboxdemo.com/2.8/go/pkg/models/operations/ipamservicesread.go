package operations

import (
	"openapi/pkg/models/shared"
)

type IpamServicesReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamServicesReadRequest struct {
	PathParams IpamServicesReadPathParams
}

type IpamServicesReadResponse struct {
	ContentType string
	Service     *shared.Service
	StatusCode  int64
}
