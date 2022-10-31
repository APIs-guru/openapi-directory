package operations

import (
	"openapi/pkg/models/shared"
)

type GetSimilarAlbumsPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetSimilarAlbumsQueryParams struct {
	ExcludeArtistIds []string                `queryParam:"style=form,explode=true,name=excludeArtistIds"`
	Fields           []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	Limit            *int32                  `queryParam:"style=form,explode=true,name=limit"`
	UserID           *string                 `queryParam:"style=form,explode=true,name=userId"`
}

type GetSimilarAlbumsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetSimilarAlbumsRequest struct {
	PathParams  GetSimilarAlbumsPathParams
	QueryParams GetSimilarAlbumsQueryParams
	Security    GetSimilarAlbumsSecurity
}

type GetSimilarAlbumsResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
