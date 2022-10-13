package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlbumArtistsQueryParams struct {
	EnableImageTypes        []shared.ImageTypeEnum  `queryParam:"style=form,explode=true,name=enableImageTypes"`
	EnableImages            *bool                   `queryParam:"style=form,explode=true,name=enableImages"`
	EnableTotalRecordCount  *bool                   `queryParam:"style=form,explode=true,name=enableTotalRecordCount"`
	EnableUserData          *bool                   `queryParam:"style=form,explode=true,name=enableUserData"`
	ExcludeItemTypes        []string                `queryParam:"style=form,explode=true,name=excludeItemTypes"`
	Fields                  []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	Filters                 []shared.ItemFilterEnum `queryParam:"style=form,explode=true,name=filters"`
	GenreIds                []string                `queryParam:"style=form,explode=true,name=genreIds"`
	Genres                  []string                `queryParam:"style=form,explode=true,name=genres"`
	ImageTypeLimit          *int32                  `queryParam:"style=form,explode=true,name=imageTypeLimit"`
	IncludeItemTypes        []string                `queryParam:"style=form,explode=true,name=includeItemTypes"`
	IsFavorite              *bool                   `queryParam:"style=form,explode=true,name=isFavorite"`
	Limit                   *int32                  `queryParam:"style=form,explode=true,name=limit"`
	MediaTypes              []string                `queryParam:"style=form,explode=true,name=mediaTypes"`
	MinCommunityRating      *float64                `queryParam:"style=form,explode=true,name=minCommunityRating"`
	NameLessThan            *string                 `queryParam:"style=form,explode=true,name=nameLessThan"`
	NameStartsWith          *string                 `queryParam:"style=form,explode=true,name=nameStartsWith"`
	NameStartsWithOrGreater *string                 `queryParam:"style=form,explode=true,name=nameStartsWithOrGreater"`
	OfficialRatings         []string                `queryParam:"style=form,explode=true,name=officialRatings"`
	ParentID                *string                 `queryParam:"style=form,explode=true,name=parentId"`
	Person                  *string                 `queryParam:"style=form,explode=true,name=person"`
	PersonIds               []string                `queryParam:"style=form,explode=true,name=personIds"`
	PersonTypes             []string                `queryParam:"style=form,explode=true,name=personTypes"`
	SearchTerm              *string                 `queryParam:"style=form,explode=true,name=searchTerm"`
	StartIndex              *int32                  `queryParam:"style=form,explode=true,name=startIndex"`
	StudioIds               []string                `queryParam:"style=form,explode=true,name=studioIds"`
	Studios                 []string                `queryParam:"style=form,explode=true,name=studios"`
	Tags                    []string                `queryParam:"style=form,explode=true,name=tags"`
	UserID                  *string                 `queryParam:"style=form,explode=true,name=userId"`
	Years                   []int32                 `queryParam:"style=form,explode=true,name=years"`
}

type GetAlbumArtistsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetAlbumArtistsRequest struct {
	QueryParams GetAlbumArtistsQueryParams
	Security    GetAlbumArtistsSecurity
}

type GetAlbumArtistsResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
