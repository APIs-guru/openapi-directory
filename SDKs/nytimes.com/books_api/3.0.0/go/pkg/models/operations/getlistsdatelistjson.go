package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetListsDateListJSONPathParams struct {
	Date string `pathParam:"style=simple,explode=false,name=date"`
	List string `pathParam:"style=simple,explode=false,name=list"`
}

type GetListsDateListJSONSortOrderEnum string

const (
	GetListsDateListJSONSortOrderEnumAsc  GetListsDateListJSONSortOrderEnum = "ASC"
	GetListsDateListJSONSortOrderEnumDesc GetListsDateListJSONSortOrderEnum = "DESC"
)

type GetListsDateListJSONQueryParams struct {
	BestsellersDate *string                            `queryParam:"style=form,explode=true,name=bestsellers-date"`
	Isbn            *int64                             `queryParam:"style=form,explode=true,name=isbn"`
	ListName        *string                            `queryParam:"style=form,explode=true,name=list-name"`
	Offset          *int64                             `queryParam:"style=form,explode=true,name=offset"`
	PublishedDate   *time.Time                         `queryParam:"style=form,explode=true,name=published-date"`
	Rank            *string                            `queryParam:"style=form,explode=true,name=rank"`
	RankLastWeek    *int64                             `queryParam:"style=form,explode=true,name=rank-last-week"`
	SortOrder       *GetListsDateListJSONSortOrderEnum `queryParam:"style=form,explode=true,name=sort-order"`
	WeeksOnList     *int64                             `queryParam:"style=form,explode=true,name=weeks-on-list"`
}

type GetListsDateListJSONSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetListsDateListJSONRequest struct {
	PathParams  GetListsDateListJSONPathParams
	QueryParams GetListsDateListJSONQueryParams
	Security    GetListsDateListJSONSecurity
}

type GetListsDateListJSON200ApplicationJSONResultsBooksIsbns struct {
	Isbn10 *string `json:"isbn10"`
	Isbn13 *string `json:"isbn13"`
}

type GetListsDateListJSON200ApplicationJSONResultsBooks struct {
	AgeGroup           *string                                                   `json:"age_group"`
	AmazonProductURL   *string                                                   `json:"amazon_product_url"`
	ArticleChapterLink *string                                                   `json:"article_chapter_link"`
	Asterisk           *int64                                                    `json:"asterisk"`
	Author             *string                                                   `json:"author"`
	BookImage          *string                                                   `json:"book_image"`
	BookReviewLink     *string                                                   `json:"book_review_link"`
	Contributor        *string                                                   `json:"contributor"`
	ContributorNote    *string                                                   `json:"contributor_note"`
	Dagger             *int64                                                    `json:"dagger"`
	Description        *string                                                   `json:"description"`
	FirstChapterLink   *string                                                   `json:"first_chapter_link"`
	Isbns              []GetListsDateListJSON200ApplicationJSONResultsBooksIsbns `json:"isbns"`
	Price              *int64                                                    `json:"price"`
	PrimaryIsbn10      *string                                                   `json:"primary_isbn10"`
	PrimaryIsbn13      *string                                                   `json:"primary_isbn13"`
	Publisher          *string                                                   `json:"publisher"`
	Rank               *int64                                                    `json:"rank"`
	RankLastWeek       *int64                                                    `json:"rank_last_week"`
	SundayReviewLink   *string                                                   `json:"sunday_review_link"`
	Title              *string                                                   `json:"title"`
	WeeksOnList        *int64                                                    `json:"weeks_on_list"`
}

type GetListsDateListJSON200ApplicationJSONResults struct {
	BestsellersDate  *string                                              `json:"bestsellers_date"`
	Books            []GetListsDateListJSON200ApplicationJSONResultsBooks `json:"books"`
	Corrections      []map[string]interface{}                             `json:"corrections"`
	DisplayName      *string                                              `json:"display_name"`
	ListName         *string                                              `json:"list_name"`
	NormalListEndsAt *int64                                               `json:"normal_list_ends_at"`
	PublishedDate    *string                                              `json:"published_date"`
	Updated          *string                                              `json:"updated"`
}

type GetListsDateListJSON200ApplicationJSON struct {
	Copyright    *string                                        `json:"copyright"`
	LastModified *string                                        `json:"last_modified"`
	NumResults   *int64                                         `json:"num_results"`
	Results      *GetListsDateListJSON200ApplicationJSONResults `json:"results"`
	Status       *string                                        `json:"status"`
}

type GetListsDateListJSONResponse struct {
	ContentType                                  string
	GetListsDateListJSON200ApplicationJSONObject *GetListsDateListJSON200ApplicationJSON
	StatusCode                                   int64
}
