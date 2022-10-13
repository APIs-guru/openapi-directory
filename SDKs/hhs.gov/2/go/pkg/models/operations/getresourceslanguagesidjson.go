package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesLanguagesIDJSONPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetResourcesLanguagesIDJSONRequest struct {
	PathParams GetResourcesLanguagesIDJSONPathParams
}

type GetResourcesLanguagesIDJSONResponse struct {
	ContentType      string
	LanguageWrappeds []shared.LanguageWrapped
	StatusCode       int64
}
