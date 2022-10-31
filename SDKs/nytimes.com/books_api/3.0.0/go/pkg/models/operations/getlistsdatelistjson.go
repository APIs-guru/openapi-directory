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
	Isbn10 *string `json:"isbn10,omitempty"`
	Isbn13 *string `json:"isbn13,omitempty"`
}

type GetListsDateListJSON200ApplicationJSONResultsBooks struct {
	AgeGroup           *string                                                   `json:"age_group,omitempty"`
	AmazonProductURL   *string                                                   `json:"amazon_product_url,omitempty"`
	ArticleChapterLink *string                                                   `json:"article_chapter_link,omitempty"`
	Asterisk           *int64                                                    `json:"asterisk,omitempty"`
	Author             *string                                                   `json:"author,omitempty"`
	BookImage          *string                                                   `json:"book_image,omitempty"`
	BookReviewLink     *string                                                   `json:"book_review_link,omitempty"`
	Contributor        *string                                                   `json:"contributor,omitempty"`
	ContributorNote    *string                                                   `json:"contributor_note,omitempty"`
	Dagger             *int64                                                    `json:"dagger,omitempty"`
	Description        *string                                                   `json:"description,omitempty"`
	FirstChapterLink   *string                                                   `json:"first_chapter_link,omitempty"`
	Isbns              []GetListsDateListJSON200ApplicationJSONResultsBooksIsbns `json:"isbns,omitempty"`
	Price              *int64                                                    `json:"price,omitempty"`
	PrimaryIsbn10      *string                                                   `json:"primary_isbn10,omitempty"`
	PrimaryIsbn13      *string                                                   `json:"primary_isbn13,omitempty"`
	Publisher          *string                                                   `json:"publisher,omitempty"`
	Rank               *int64                                                    `json:"rank,omitempty"`
	RankLastWeek       *int64                                                    `json:"rank_last_week,omitempty"`
	SundayReviewLink   *string                                                   `json:"sunday_review_link,omitempty"`
	Title              *string                                                   `json:"title,omitempty"`
	WeeksOnList        *int64                                                    `json:"weeks_on_list,omitempty"`
}

type GetListsDateListJSON200ApplicationJSONResults struct {
	BestsellersDate  *string                                              `json:"bestsellers_date,omitempty"`
	Books            []GetListsDateListJSON200ApplicationJSONResultsBooks `json:"books,omitempty"`
	Corrections      []map[string]interface{}                             `json:"corrections,omitempty"`
	DisplayName      *string                                              `json:"display_name,omitempty"`
	ListName         *string                                              `json:"list_name,omitempty"`
	NormalListEndsAt *int64                                               `json:"normal_list_ends_at,omitempty"`
	PublishedDate    *string                                              `json:"published_date,omitempty"`
	Updated          *string                                              `json:"updated,omitempty"`
}

type GetListsDateListJSON200ApplicationJSON struct {
	Copyright    *string                                        `json:"copyright,omitempty"`
	LastModified *string                                        `json:"last_modified,omitempty"`
	NumResults   *int64                                         `json:"num_results,omitempty"`
	Results      *GetListsDateListJSON200ApplicationJSONResults `json:"results,omitempty"`
	Status       *string                                        `json:"status,omitempty"`
}

type GetListsDateListJSONResponse struct {
	ContentType                                  string
	GetListsDateListJSON200ApplicationJSONObject *GetListsDateListJSON200ApplicationJSON
	StatusCode                                   int64
}
