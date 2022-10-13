package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstantMixFromMusicGenresPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstantMixFromMusicGenresQueryParams struct {
	EnableImageTypes []shared.ImageTypeEnum  `queryParam:"style=form,explode=true,name=enableImageTypes"`
	EnableImages     *bool                   `queryParam:"style=form,explode=true,name=enableImages"`
	EnableUserData   *bool                   `queryParam:"style=form,explode=true,name=enableUserData"`
	Fields           []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	ImageTypeLimit   *int32                  `queryParam:"style=form,explode=true,name=imageTypeLimit"`
	Limit            *int32                  `queryParam:"style=form,explode=true,name=limit"`
	UserID           *string                 `queryParam:"style=form,explode=true,name=userId"`
}

type GetInstantMixFromMusicGenresSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetInstantMixFromMusicGenresRequest struct {
	PathParams  GetInstantMixFromMusicGenresPathParams
	QueryParams GetInstantMixFromMusicGenresQueryParams
	Security    GetInstantMixFromMusicGenresSecurity
}

type GetInstantMixFromMusicGenresResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
