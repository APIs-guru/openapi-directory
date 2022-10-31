package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelItemsPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
}

type GetChannelItemsQueryParams struct {
	Fields     []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	Filters    []shared.ItemFilterEnum `queryParam:"style=form,explode=true,name=filters"`
	FolderID   *string                 `queryParam:"style=form,explode=true,name=folderId"`
	Limit      *int32                  `queryParam:"style=form,explode=true,name=limit"`
	SortBy     *string                 `queryParam:"style=form,explode=true,name=sortBy"`
	SortOrder  *string                 `queryParam:"style=form,explode=true,name=sortOrder"`
	StartIndex *int32                  `queryParam:"style=form,explode=true,name=startIndex"`
	UserID     *string                 `queryParam:"style=form,explode=true,name=userId"`
}

type GetChannelItemsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetChannelItemsRequest struct {
	PathParams  GetChannelItemsPathParams
	QueryParams GetChannelItemsQueryParams
	Security    GetChannelItemsSecurity
}

type GetChannelItemsResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
