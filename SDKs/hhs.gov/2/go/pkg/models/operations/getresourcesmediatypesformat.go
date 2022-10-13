package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesMediaTypesFormatPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
}

type GetResourcesMediaTypesFormatRequest struct {
	PathParams GetResourcesMediaTypesFormatPathParams
}

type GetResourcesMediaTypesFormatResponse struct {
	ContentType             string
	MediaTypeHolderWrappeds []shared.MediaTypeHolderWrapped
	StatusCode              int64
}
