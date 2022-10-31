package operations

import (
	"openapi/pkg/models/shared"
)

type GetLiveTvChannelsQueryParams struct {
	AddCurrentProgram     *bool                   `queryParam:"style=form,explode=true,name=addCurrentProgram"`
	EnableFavoriteSorting *bool                   `queryParam:"style=form,explode=true,name=enableFavoriteSorting"`
	EnableImageTypes      []shared.ImageTypeEnum  `queryParam:"style=form,explode=true,name=enableImageTypes"`
	EnableImages          *bool                   `queryParam:"style=form,explode=true,name=enableImages"`
	EnableUserData        *bool                   `queryParam:"style=form,explode=true,name=enableUserData"`
	Fields                []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	ImageTypeLimit        *int32                  `queryParam:"style=form,explode=true,name=imageTypeLimit"`
	IsDisliked            *bool                   `queryParam:"style=form,explode=true,name=isDisliked"`
	IsFavorite            *bool                   `queryParam:"style=form,explode=true,name=isFavorite"`
	IsKids                *bool                   `queryParam:"style=form,explode=true,name=isKids"`
	IsLiked               *bool                   `queryParam:"style=form,explode=true,name=isLiked"`
	IsMovie               *bool                   `queryParam:"style=form,explode=true,name=isMovie"`
	IsNews                *bool                   `queryParam:"style=form,explode=true,name=isNews"`
	IsSeries              *bool                   `queryParam:"style=form,explode=true,name=isSeries"`
	IsSports              *bool                   `queryParam:"style=form,explode=true,name=isSports"`
	Limit                 *int32                  `queryParam:"style=form,explode=true,name=limit"`
	SortBy                []string                `queryParam:"style=form,explode=true,name=sortBy"`
	SortOrder             *shared.SortOrderEnum   `queryParam:"style=form,explode=true,name=sortOrder"`
	StartIndex            *int32                  `queryParam:"style=form,explode=true,name=startIndex"`
	Type                  *shared.ChannelTypeEnum `queryParam:"style=form,explode=true,name=type"`
	UserID                *string                 `queryParam:"style=form,explode=true,name=userId"`
}

type GetLiveTvChannelsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetLiveTvChannelsRequest struct {
	QueryParams GetLiveTvChannelsQueryParams
	Security    GetLiveTvChannelsSecurity
}

type GetLiveTvChannelsResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
