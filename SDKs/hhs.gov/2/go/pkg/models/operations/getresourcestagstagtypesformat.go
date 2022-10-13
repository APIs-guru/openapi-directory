package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesTagsTagTypesFormatPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
}

type GetResourcesTagsTagTypesFormatRequest struct {
	PathParams GetResourcesTagsTagTypesFormatPathParams
}

type GetResourcesTagsTagTypesFormatResponse struct {
	ContentType               string
	StatusCode                int64
	TagTypeMarshallerWrappeds []shared.TagTypeMarshallerWrapped
}
