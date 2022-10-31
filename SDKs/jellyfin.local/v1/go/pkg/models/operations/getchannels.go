package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelsQueryParams struct {
	IsFavorite            *bool   `queryParam:"style=form,explode=true,name=isFavorite"`
	Limit                 *int32  `queryParam:"style=form,explode=true,name=limit"`
	StartIndex            *int32  `queryParam:"style=form,explode=true,name=startIndex"`
	SupportsLatestItems   *bool   `queryParam:"style=form,explode=true,name=supportsLatestItems"`
	SupportsMediaDeletion *bool   `queryParam:"style=form,explode=true,name=supportsMediaDeletion"`
	UserID                *string `queryParam:"style=form,explode=true,name=userId"`
}

type GetChannelsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetChannelsRequest struct {
	QueryParams GetChannelsQueryParams
	Security    GetChannelsSecurity
}

type GetChannelsResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
