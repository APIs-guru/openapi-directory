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
	Isbn10 *string `json:"isbn10"`
	Isbn13 *string `json:"isbn13"`
}

type GetListsBestSellersHistoryJSON200ApplicationJSONResultsRanksHistory struct {
	Asterisk        *int64       `json:"asterisk"`
	BestsellersDate *string      `json:"bestsellers_date"`
	Dagger          *int64       `json:"dagger"`
	DisplayName     *string      `json:"display_name"`
	ListName        *string      `json:"list_name"`
	PrimaryIsbn10   *string      `json:"primary_isbn10"`
	PrimaryIsbn13   *string      `json:"primary_isbn13"`
	PublishedDate   *string      `json:"published_date"`
	Rank            *int64       `json:"rank"`
	RanksLastWeek   *interface{} `json:"ranks_last_week"`
	WeeksOnList     *int64       `json:"weeks_on_list"`
}

type GetListsBestSellersHistoryJSON200ApplicationJSONResultsReviews struct {
	ArticleChapterLink *string `json:"article_chapter_link"`
	BookReviewLink     *string `json:"book_review_link"`
	FirstChapterLink   *string `json:"first_chapter_link"`
	SundayReviewLink   *string `json:"sunday_review_link"`
}

type GetListsBestSellersHistoryJSON200ApplicationJSONResults struct {
	AgeGroup        *string                                                               `json:"age_group"`
	Author          *string                                                               `json:"author"`
	Contributor     *string                                                               `json:"contributor"`
	ContributorNote *string                                                               `json:"contributor_note"`
	Description     *string                                                               `json:"description"`
	Isbns           []GetListsBestSellersHistoryJSON200ApplicationJSONResultsIsbns        `json:"isbns"`
	Price           *int64                                                                `json:"price"`
	Publisher       *string                                                               `json:"publisher"`
	RanksHistory    []GetListsBestSellersHistoryJSON200ApplicationJSONResultsRanksHistory `json:"ranks_history"`
	Reviews         []GetListsBestSellersHistoryJSON200ApplicationJSONResultsReviews      `json:"reviews"`
	Title           *string                                                               `json:"title"`
}

type GetListsBestSellersHistoryJSON200ApplicationJSON struct {
	Copyright  *string                                                   `json:"copyright"`
	NumResults *int64                                                    `json:"num_results"`
	Results    []GetListsBestSellersHistoryJSON200ApplicationJSONResults `json:"results"`
	Status     *string                                                   `json:"status"`
}

type GetListsBestSellersHistoryJSONResponse struct {
	ContentType                                            string
	GetListsBestSellersHistoryJSON200ApplicationJSONObject *GetListsBestSellersHistoryJSON200ApplicationJSON
	StatusCode                                             int64
}
