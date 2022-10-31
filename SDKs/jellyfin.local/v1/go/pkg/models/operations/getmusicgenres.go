package operations

import (
	"openapi/pkg/models/shared"
)

type GetMusicGenresQueryParams struct {
	EnableImageTypes        []shared.ImageTypeEnum  `queryParam:"style=form,explode=true,name=enableImageTypes"`
	EnableImages            *bool                   `queryParam:"style=form,explode=true,name=enableImages"`
	EnableTotalRecordCount  *bool                   `queryParam:"style=form,explode=true,name=enableTotalRecordCount"`
	ExcludeItemTypes        []string                `queryParam:"style=form,explode=true,name=excludeItemTypes"`
	Fields                  []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	ImageTypeLimit          *int32                  `queryParam:"style=form,explode=true,name=imageTypeLimit"`
	IncludeItemTypes        []string                `queryParam:"style=form,explode=true,name=includeItemTypes"`
	IsFavorite              *bool                   `queryParam:"style=form,explode=true,name=isFavorite"`
	Limit                   *int32                  `queryParam:"style=form,explode=true,name=limit"`
	NameLessThan            *string                 `queryParam:"style=form,explode=true,name=nameLessThan"`
	NameStartsWith          *string                 `queryParam:"style=form,explode=true,name=nameStartsWith"`
	NameStartsWithOrGreater *string                 `queryParam:"style=form,explode=true,name=nameStartsWithOrGreater"`
	ParentID                *string                 `queryParam:"style=form,explode=true,name=parentId"`
	SearchTerm              *string                 `queryParam:"style=form,explode=true,name=searchTerm"`
	StartIndex              *int32                  `queryParam:"style=form,explode=true,name=startIndex"`
	UserID                  *string                 `queryParam:"style=form,explode=true,name=userId"`
}

type GetMusicGenresSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetMusicGenresRequest struct {
	QueryParams GetMusicGenresQueryParams
	Security    GetMusicGenresSecurity
}

type GetMusicGenresResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
