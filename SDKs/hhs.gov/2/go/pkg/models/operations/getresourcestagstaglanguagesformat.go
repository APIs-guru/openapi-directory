package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesTagsTagLanguagesFormatPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
}

type GetResourcesTagsTagLanguagesFormatRequest struct {
	PathParams GetResourcesTagsTagLanguagesFormatPathParams
}

type GetResourcesTagsTagLanguagesFormatResponse struct {
	ContentType                   string
	StatusCode                    int64
	TagLanguageMarshallerWrappeds []shared.TagLanguageMarshallerWrapped
}
