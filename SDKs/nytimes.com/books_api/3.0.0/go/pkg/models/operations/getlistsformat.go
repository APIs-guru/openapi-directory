package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetListsFormatFormatEnum string

const (
	GetListsFormatFormatEnumJSON  GetListsFormatFormatEnum = "json"
	GetListsFormatFormatEnumJsonp GetListsFormatFormatEnum = "jsonp"
)

type GetListsFormatPathParams struct {
	Format GetListsFormatFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type GetListsFormatSortOrderEnum string

const (
	GetListsFormatSortOrderEnumAsc  GetListsFormatSortOrderEnum = "ASC"
	GetListsFormatSortOrderEnumDesc GetListsFormatSortOrderEnum = "DESC"
)

type GetListsFormatQueryParams struct {
	BestsellersDate *time.Time                   `queryParam:"style=form,explode=true,name=bestsellers-date"`
	Date            *string                      `queryParam:"style=form,explode=true,name=date"`
	Isbn            *string                      `queryParam:"style=form,explode=true,name=isbn"`
	List            *string                      `queryParam:"style=form,explode=true,name=list"`
	Offset          *int64                       `queryParam:"style=form,explode=true,name=offset"`
	PublishedDate   *string                      `queryParam:"style=form,explode=true,name=published-date"`
	Rank            *int64                       `queryParam:"style=form,explode=true,name=rank"`
	RankLastWeek    *int64                       `queryParam:"style=form,explode=true,name=rank-last-week"`
	SortOrder       *GetListsFormatSortOrderEnum `queryParam:"style=form,explode=true,name=sort-order"`
	WeeksOnList     *int64                       `queryParam:"style=form,explode=true,name=weeks-on-list"`
}

type GetListsFormatSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetListsFormatRequest struct {
	PathParams  GetListsFormatPathParams
	QueryParams GetListsFormatQueryParams
	Security    GetListsFormatSecurity
}

type GetListsFormat200ApplicationJSONResultsBookDetails struct {
	AgeGroup        *string `json:"age_group,omitempty"`
	Author          *string `json:"author,omitempty"`
	Contributor     *string `json:"contributor,omitempty"`
	ContributorNote *string `json:"contributor_note,omitempty"`
	Description     *string `json:"description,omitempty"`
	Price           *int64  `json:"price,omitempty"`
	PrimaryIsbn10   *string `json:"primary_isbn10,omitempty"`
	PrimaryIsbn13   *string `json:"primary_isbn13,omitempty"`
	Publisher       *string `json:"publisher,omitempty"`
	Title           *string `json:"title,omitempty"`
}

type GetListsFormat200ApplicationJSONResultsIsbns struct {
	Isbn10 *string `json:"isbn10,omitempty"`
	Isbn13 *string `json:"isbn13,omitempty"`
}

type GetListsFormat200ApplicationJSONResultsReviews struct {
	ArticleChapterLink *string `json:"article_chapter_link,omitempty"`
	BookReviewLink     *string `json:"book_review_link,omitempty"`
	FirstChapterLink   *string `json:"first_chapter_link,omitempty"`
	SundayReviewLink   *string `json:"sunday_review_link,omitempty"`
}

type GetListsFormat200ApplicationJSONResults struct {
	AmazonProductURL *string                                              `json:"amazon_product_url,omitempty"`
	Asterisk         *int64                                               `json:"asterisk,omitempty"`
	BestsellersDate  *string                                              `json:"bestsellers_date,omitempty"`
	BookDetails      []GetListsFormat200ApplicationJSONResultsBookDetails `json:"book_details,omitempty"`
	Dagger           *int64                                               `json:"dagger,omitempty"`
	DisplayName      *string                                              `json:"display_name,omitempty"`
	Isbns            []GetListsFormat200ApplicationJSONResultsIsbns       `json:"isbns,omitempty"`
	ListName         *string                                              `json:"list_name,omitempty"`
	PublishedDate    *string                                              `json:"published_date,omitempty"`
	Rank             *int64                                               `json:"rank,omitempty"`
	RankLastWeek     *int64                                               `json:"rank_last_week,omitempty"`
	Reviews          []GetListsFormat200ApplicationJSONResultsReviews     `json:"reviews,omitempty"`
	WeeksOnList      *int64                                               `json:"weeks_on_list,omitempty"`
}

type GetListsFormat200ApplicationJSON struct {
	Copyright    *string                                   `json:"copyright,omitempty"`
	LastModified *string                                   `json:"last_modified,omitempty"`
	NumResults   *int64                                    `json:"num_results,omitempty"`
	Results      []GetListsFormat200ApplicationJSONResults `json:"results,omitempty"`
	Status       *string                                   `json:"status,omitempty"`
}

type GetListsFormatResponse struct {
	ContentType                            string
	GetListsFormat200ApplicationJSONObject *GetListsFormat200ApplicationJSON
	StatusCode                             int64
}
