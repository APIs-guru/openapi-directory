package operations

import (
	"openapi/pkg/models/shared"
)

type GetReviewsFormatFormatEnum string

const (
	GetReviewsFormatFormatEnumJSON  GetReviewsFormatFormatEnum = "json"
	GetReviewsFormatFormatEnumJsonp GetReviewsFormatFormatEnum = "jsonp"
)

type GetReviewsFormatPathParams struct {
	Format GetReviewsFormatFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type GetReviewsFormatQueryParams struct {
	APIKey *string `queryParam:"style=form,explode=true,name=api-key"`
	Author *string `queryParam:"style=form,explode=true,name=author"`
	Isbn   *int64  `queryParam:"style=form,explode=true,name=isbn"`
	Title  *string `queryParam:"style=form,explode=true,name=title"`
}

type GetReviewsFormatSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetReviewsFormatRequest struct {
	PathParams  GetReviewsFormatPathParams
	QueryParams GetReviewsFormatQueryParams
	Security    GetReviewsFormatSecurity
}

type GetReviewsFormat200ApplicationJSONResults struct {
	BookAuthor    *string  `json:"book_author,omitempty"`
	BookTitle     *string  `json:"book_title,omitempty"`
	Byline        *string  `json:"byline,omitempty"`
	Isbn13        []string `json:"isbn13,omitempty"`
	PublicationDt *string  `json:"publication_dt,omitempty"`
	Summary       *string  `json:"summary,omitempty"`
	URL           *string  `json:"url,omitempty"`
}

type GetReviewsFormat200ApplicationJSON struct {
	Copyright  *string                                     `json:"copyright,omitempty"`
	NumResults *int64                                      `json:"num_results,omitempty"`
	Results    []GetReviewsFormat200ApplicationJSONResults `json:"results,omitempty"`
	Status     *string                                     `json:"status,omitempty"`
}

type GetReviewsFormatResponse struct {
	ContentType                              string
	GetReviewsFormat200ApplicationJSONObject *GetReviewsFormat200ApplicationJSON
	StatusCode                               int64
}
