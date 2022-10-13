package operations

import (
	"openapi/pkg/models/shared"
)

type GetSimilarMoviesPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetSimilarMoviesQueryParams struct {
	ExcludeArtistIds []string                `queryParam:"style=form,explode=true,name=excludeArtistIds"`
	Fields           []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	Limit            *int32                  `queryParam:"style=form,explode=true,name=limit"`
	UserID           *string                 `queryParam:"style=form,explode=true,name=userId"`
}

type GetSimilarMoviesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetSimilarMoviesRequest struct {
	PathParams  GetSimilarMoviesPathParams
	QueryParams GetSimilarMoviesQueryParams
	Security    GetSimilarMoviesSecurity
}

type GetSimilarMoviesResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
