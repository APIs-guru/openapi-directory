package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstantMixFromMusicGenrePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetInstantMixFromMusicGenreQueryParams struct {
	EnableImageTypes []shared.ImageTypeEnum  `queryParam:"style=form,explode=true,name=enableImageTypes"`
	EnableImages     *bool                   `queryParam:"style=form,explode=true,name=enableImages"`
	EnableUserData   *bool                   `queryParam:"style=form,explode=true,name=enableUserData"`
	Fields           []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	ImageTypeLimit   *int32                  `queryParam:"style=form,explode=true,name=imageTypeLimit"`
	Limit            *int32                  `queryParam:"style=form,explode=true,name=limit"`
	UserID           *string                 `queryParam:"style=form,explode=true,name=userId"`
}

type GetInstantMixFromMusicGenreSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetInstantMixFromMusicGenreRequest struct {
	PathParams  GetInstantMixFromMusicGenrePathParams
	QueryParams GetInstantMixFromMusicGenreQueryParams
	Security    GetInstantMixFromMusicGenreSecurity
}

type GetInstantMixFromMusicGenreResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
