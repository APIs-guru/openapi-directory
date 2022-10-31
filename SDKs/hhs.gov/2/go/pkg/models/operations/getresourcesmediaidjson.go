package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesMediaIDJSONPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetResourcesMediaIDJSONRequest struct {
	PathParams GetResourcesMediaIDJSONPathParams
}

type GetResourcesMediaIDJSONResponse struct {
	ContentType       string
	MediaItemWrappeds []shared.MediaItemWrapped
	StatusCode        int64
}
