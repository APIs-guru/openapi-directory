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
	AgeGroup        *string `json:"age_group"`
	Author          *string `json:"author"`
	Contributor     *string `json:"contributor"`
	ContributorNote *string `json:"contributor_note"`
	Description     *string `json:"description"`
	Price           *int64  `json:"price"`
	PrimaryIsbn10   *string `json:"primary_isbn10"`
	PrimaryIsbn13   *string `json:"primary_isbn13"`
	Publisher       *string `json:"publisher"`
	Title           *string `json:"title"`
}

type GetListsFormat200ApplicationJSONResultsIsbns struct {
	Isbn10 *string `json:"isbn10"`
	Isbn13 *string `json:"isbn13"`
}

type GetListsFormat200ApplicationJSONResultsReviews struct {
	ArticleChapterLink *string `json:"article_chapter_link"`
	BookReviewLink     *string `json:"book_review_link"`
	FirstChapterLink   *string `json:"first_chapter_link"`
	SundayReviewLink   *string `json:"sunday_review_link"`
}

type GetListsFormat200ApplicationJSONResults struct {
	AmazonProductURL *string                                              `json:"amazon_product_url"`
	Asterisk         *int64                                               `json:"asterisk"`
	BestsellersDate  *string                                              `json:"bestsellers_date"`
	BookDetails      []GetListsFormat200ApplicationJSONResultsBookDetails `json:"book_details"`
	Dagger           *int64                                               `json:"dagger"`
	DisplayName      *string                                              `json:"display_name"`
	Isbns            []GetListsFormat200ApplicationJSONResultsIsbns       `json:"isbns"`
	ListName         *string                                              `json:"list_name"`
	PublishedDate    *string                                              `json:"published_date"`
	Rank             *int64                                               `json:"rank"`
	RankLastWeek     *int64                                               `json:"rank_last_week"`
	Reviews          []GetListsFormat200ApplicationJSONResultsReviews     `json:"reviews"`
	WeeksOnList      *int64                                               `json:"weeks_on_list"`
}

type GetListsFormat200ApplicationJSON struct {
	Copyright    *string                                   `json:"copyright"`
	LastModified *string                                   `json:"last_modified"`
	NumResults   *int64                                    `json:"num_results"`
	Results      []GetListsFormat200ApplicationJSONResults `json:"results"`
	Status       *string                                   `json:"status"`
}

type GetListsFormatResponse struct {
	ContentType                            string
	GetListsFormat200ApplicationJSONObject *GetListsFormat200ApplicationJSON
	StatusCode                             int64
}
