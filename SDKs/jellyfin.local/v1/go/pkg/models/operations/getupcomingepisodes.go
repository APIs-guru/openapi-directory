package operations

import (
	"openapi/pkg/models/shared"
)

type GetUpcomingEpisodesQueryParams struct {
	EnableImageTypes []shared.ImageTypeEnum  `queryParam:"style=form,explode=true,name=enableImageTypes"`
	EnableImges      *bool                   `queryParam:"style=form,explode=true,name=enableImges"`
	EnableUserData   *bool                   `queryParam:"style=form,explode=true,name=enableUserData"`
	Fields           []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	ImageTypeLimit   *int32                  `queryParam:"style=form,explode=true,name=imageTypeLimit"`
	Limit            *int32                  `queryParam:"style=form,explode=true,name=limit"`
	ParentID         *string                 `queryParam:"style=form,explode=true,name=parentId"`
	StartIndex       *int32                  `queryParam:"style=form,explode=true,name=startIndex"`
	UserID           *string                 `queryParam:"style=form,explode=true,name=userId"`
}

type GetUpcomingEpisodesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetUpcomingEpisodesRequest struct {
	QueryParams GetUpcomingEpisodesQueryParams
	Security    GetUpcomingEpisodesSecurity
}

type GetUpcomingEpisodesResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
