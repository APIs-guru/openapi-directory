package operations

import (
	"openapi/pkg/models/shared"
)

type GetSimilarTrailersPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetSimilarTrailersQueryParams struct {
	ExcludeArtistIds []string                `queryParam:"style=form,explode=true,name=excludeArtistIds"`
	Fields           []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	Limit            *int32                  `queryParam:"style=form,explode=true,name=limit"`
	UserID           *string                 `queryParam:"style=form,explode=true,name=userId"`
}

type GetSimilarTrailersSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetSimilarTrailersRequest struct {
	PathParams  GetSimilarTrailersPathParams
	QueryParams GetSimilarTrailersQueryParams
	Security    GetSimilarTrailersSecurity
}

type GetSimilarTrailersResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
