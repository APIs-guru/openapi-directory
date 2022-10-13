package operations

import (
	"openapi/pkg/models/shared"
)

type GetLatestMediaPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetLatestMediaQueryParams struct {
	EnableImageTypes []shared.ImageTypeEnum  `queryParam:"style=form,explode=true,name=enableImageTypes"`
	EnableImages     *bool                   `queryParam:"style=form,explode=true,name=enableImages"`
	EnableUserData   *bool                   `queryParam:"style=form,explode=true,name=enableUserData"`
	Fields           []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	GroupItems       *bool                   `queryParam:"style=form,explode=true,name=groupItems"`
	ImageTypeLimit   *int32                  `queryParam:"style=form,explode=true,name=imageTypeLimit"`
	IncludeItemTypes []string                `queryParam:"style=form,explode=true,name=includeItemTypes"`
	IsPlayed         *bool                   `queryParam:"style=form,explode=true,name=isPlayed"`
	Limit            *int32                  `queryParam:"style=form,explode=true,name=limit"`
	ParentID         *string                 `queryParam:"style=form,explode=true,name=parentId"`
}

type GetLatestMediaSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetLatestMediaRequest struct {
	PathParams  GetLatestMediaPathParams
	QueryParams GetLatestMediaQueryParams
	Security    GetLatestMediaSecurity
}

type GetLatestMediaResponse struct {
	BaseItemDtos []shared.BaseItemDto
	ContentType  string
	StatusCode   int64
}
