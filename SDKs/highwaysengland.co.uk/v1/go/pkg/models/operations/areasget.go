package operations

import (
	"openapi/pkg/models/shared"
)

type AreasGetPathParams struct {
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type AreasGetRequest struct {
	PathParams AreasGetPathParams
}

type AreasGetResponse struct {
	AreaResponse *shared.AreaResponse
	ContentType  string
	StatusCode   int64
}
