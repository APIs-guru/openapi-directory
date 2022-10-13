package operations

import (
	"openapi/pkg/models/shared"
)

type GetSimilarItemsPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetSimilarItemsQueryParams struct {
	ExcludeArtistIds []string                `queryParam:"style=form,explode=true,name=excludeArtistIds"`
	Fields           []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	Limit            *int32                  `queryParam:"style=form,explode=true,name=limit"`
	UserID           *string                 `queryParam:"style=form,explode=true,name=userId"`
}

type GetSimilarItemsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetSimilarItemsRequest struct {
	PathParams  GetSimilarItemsPathParams
	QueryParams GetSimilarItemsQueryParams
	Security    GetSimilarItemsSecurity
}

type GetSimilarItemsResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
