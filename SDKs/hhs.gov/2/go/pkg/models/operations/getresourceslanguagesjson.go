package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesLanguagesJSONQueryParams struct {
	Max    *int32  `queryParam:"style=form,explode=false,name=max"`
	Offset *int32  `queryParam:"style=form,explode=false,name=offset"`
	Sort   *string `queryParam:"style=form,explode=false,name=sort"`
}

type GetResourcesLanguagesJSONRequest struct {
	QueryParams GetResourcesLanguagesJSONQueryParams
}

type GetResourcesLanguagesJSONResponse struct {
	ContentType      string
	LanguageWrappeds []shared.LanguageWrapped
	StatusCode       int64
}
