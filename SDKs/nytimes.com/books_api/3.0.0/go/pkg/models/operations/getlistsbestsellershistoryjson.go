package operations

import (
	"openapi/pkg/models/shared"
)

type GetListsBestSellersHistoryJSONQueryParams struct {
	AgeGroup    *string `queryParam:"style=form,explode=true,name=age-group"`
	Author      *string `queryParam:"style=form,explode=true,name=author"`
	Contributor *string `queryParam:"style=form,explode=true,name=contributor"`
	Isbn        *string `queryParam:"style=form,explode=true,name=isbn"`
	Price       *string `queryParam:"style=form,explode=true,name=price"`
	Publisher   *string `queryParam:"style=form,explode=true,name=publisher"`
	Title       *string `queryParam:"style=form,explode=true,name=title"`
}

type GetListsBestSellersHistoryJSONSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetListsBestSellersHistoryJSONRequest struct {
	QueryParams GetListsBestSellersHistoryJSONQueryParams
	Security    GetListsBestSellersHistoryJSONSecurity
}

type GetListsBestSellersHistoryJSON200ApplicationJSONResultsIsbns struct {
	Isbn10 *string `json:"isbn10,omitempty"`
	Isbn13 *string `json:"isbn13,omitempty"`
}

type GetListsBestSellersHistoryJSON200ApplicationJSONResultsRanksHistory struct {
	Asterisk        *int64       `json:"asterisk,omitempty"`
	BestsellersDate *string      `json:"bestsellers_date,omitempty"`
	Dagger          *int64       `json:"dagger,omitempty"`
	DisplayName     *string      `json:"display_name,omitempty"`
	ListName        *string      `json:"list_name,omitempty"`
	PrimaryIsbn10   *string      `json:"primary_isbn10,omitempty"`
	PrimaryIsbn13   *string      `json:"primary_isbn13,omitempty"`
	PublishedDate   *string      `json:"published_date,omitempty"`
	Rank            *int64       `json:"rank,omitempty"`
	RanksLastWeek   *interface{} `json:"ranks_last_week,omitempty"`
	WeeksOnList     *int64       `json:"weeks_on_list,omitempty"`
}

type GetListsBestSellersHistoryJSON200ApplicationJSONResultsReviews struct {
	ArticleChapterLink *string `json:"article_chapter_link,omitempty"`
	BookReviewLink     *string `json:"book_review_link,omitempty"`
	FirstChapterLink   *string `json:"first_chapter_link,omitempty"`
	SundayReviewLink   *string `json:"sunday_review_link,omitempty"`
}

type GetListsBestSellersHistoryJSON200ApplicationJSONResults struct {
	AgeGroup        *string                                                               `json:"age_group,omitempty"`
	Author          *string                                                               `json:"author,omitempty"`
	Contributor     *string                                                               `json:"contributor,omitempty"`
	ContributorNote *string                                                               `json:"contributor_note,omitempty"`
	Description     *string                                                               `json:"description,omitempty"`
	Isbns           []GetListsBestSellersHistoryJSON200ApplicationJSONResultsIsbns        `json:"isbns,omitempty"`
	Price           *int64                                                                `json:"price,omitempty"`
	Publisher       *string                                                               `json:"publisher,omitempty"`
	RanksHistory    []GetListsBestSellersHistoryJSON200ApplicationJSONResultsRanksHistory `json:"ranks_history,omitempty"`
	Reviews         []GetListsBestSellersHistoryJSON200ApplicationJSONResultsReviews      `json:"reviews,omitempty"`
	Title           *string                                                               `json:"title,omitempty"`
}

type GetListsBestSellersHistoryJSON200ApplicationJSON struct {
	Copyright  *string                                                   `json:"copyright,omitempty"`
	NumResults *int64                                                    `json:"num_results,omitempty"`
	Results    []GetListsBestSellersHistoryJSON200ApplicationJSONResults `json:"results,omitempty"`
	Status     *string                                                   `json:"status,omitempty"`
}

type GetListsBestSellersHistoryJSONResponse struct {
	ContentType                                            string
	GetListsBestSellersHistoryJSON200ApplicationJSONObject *GetListsBestSellersHistoryJSON200ApplicationJSON
	StatusCode                                             int64
}
