package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserViewsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUserViewsQueryParams struct {
	IncludeExternalContent *bool    `queryParam:"style=form,explode=true,name=includeExternalContent"`
	IncludeHidden          *bool    `queryParam:"style=form,explode=true,name=includeHidden"`
	PresetViews            []string `queryParam:"style=form,explode=true,name=presetViews"`
}

type GetUserViewsRequest struct {
	PathParams  GetUserViewsPathParams
	QueryParams GetUserViewsQueryParams
}

type GetUserViewsResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
