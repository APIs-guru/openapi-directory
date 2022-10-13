package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
}

type GetChannelQueryParams struct {
	UserID *string `queryParam:"style=form,explode=true,name=userId"`
}

type GetChannelSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetChannelRequest struct {
	PathParams  GetChannelPathParams
	QueryParams GetChannelQueryParams
	Security    GetChannelSecurity
}

type GetChannelResponse struct {
	BaseItemDto *shared.BaseItemDto
	ContentType string
	StatusCode  int64
}
