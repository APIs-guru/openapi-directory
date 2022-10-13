package operations

import (
	"openapi/pkg/models/shared"
)

type GetArticlesearchJSONSortEnum string

const (
	GetArticlesearchJSONSortEnumNewest GetArticlesearchJSONSortEnum = "newest"
	GetArticlesearchJSONSortEnumOldest GetArticlesearchJSONSortEnum = "oldest"
)

type GetArticlesearchJSONQueryParams struct {
	BeginDate   *string                       `queryParam:"style=form,explode=true,name=begin_date"`
	EndDate     *string                       `queryParam:"style=form,explode=true,name=end_date"`
	FacetField  *string                       `queryParam:"style=form,explode=true,name=facet_field"`
	FacetFilter *bool                         `queryParam:"style=form,explode=true,name=facet_filter"`
	Fl          *string                       `queryParam:"style=form,explode=true,name=fl"`
	Fq          *string                       `queryParam:"style=form,explode=true,name=fq"`
	Hl          *bool                         `queryParam:"style=form,explode=true,name=hl"`
	Page        *int64                        `queryParam:"style=form,explode=true,name=page"`
	Q           *string                       `queryParam:"style=form,explode=true,name=q"`
	Sort        *GetArticlesearchJSONSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetArticlesearchJSONRequest struct {
	QueryParams GetArticlesearchJSONQueryParams
}

type GetArticlesearchJSON200ApplicationJSONResponseMeta struct {
	Hits   *int64 `json:"hits"`
	Offset *int64 `json:"offset"`
	Time   *int64 `json:"time"`
}

type GetArticlesearchJSON200ApplicationJSONResponse struct {
	Docs []shared.Doc                                        `json:"docs"`
	Meta *GetArticlesearchJSON200ApplicationJSONResponseMeta `json:"meta"`
}

type GetArticlesearchJSON200ApplicationJSON struct {
	Response *GetArticlesearchJSON200ApplicationJSONResponse `json:"response"`
}

type GetArticlesearchJSONResponse struct {
	ContentType                                  string
	GetArticlesearchJSON200ApplicationJSONObject *GetArticlesearchJSON200ApplicationJSON
	StatusCode                                   int64
}
