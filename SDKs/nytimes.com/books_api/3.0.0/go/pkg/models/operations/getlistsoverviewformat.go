package operations

import (
	"openapi/pkg/models/shared"
)

type GetListsOverviewFormatFormatEnum string

const (
	GetListsOverviewFormatFormatEnumJSON  GetListsOverviewFormatFormatEnum = "json"
	GetListsOverviewFormatFormatEnumJsonp GetListsOverviewFormatFormatEnum = "jsonp"
)

type GetListsOverviewFormatPathParams struct {
	Format GetListsOverviewFormatFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type GetListsOverviewFormatQueryParams struct {
	APIKey        *string `queryParam:"style=form,explode=true,name=api-key"`
	PublishedDate *string `queryParam:"style=form,explode=true,name=published_date"`
}

type GetListsOverviewFormatSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetListsOverviewFormatRequest struct {
	PathParams  GetListsOverviewFormatPathParams
	QueryParams GetListsOverviewFormatQueryParams
	Security    GetListsOverviewFormatSecurity
}

type GetListsOverviewFormat200ApplicationJSONResultsListsBooks struct {
	AgeGroup        *string `json:"age_group"`
	Author          *string `json:"author"`
	Contributor     *string `json:"contributor"`
	ContributorNote *string `json:"contributor_note"`
	CreatedDate     *string `json:"created_date"`
	Description     *string `json:"description"`
	Price           *int64  `json:"price"`
	PrimaryIsbn10   *string `json:"primary_isbn10"`
	PrimaryIsbn13   *string `json:"primary_isbn13"`
	Publisher       *string `json:"publisher"`
	Rank            *int64  `json:"rank"`
	Title           *string `json:"title"`
	UpdatedDate     *string `json:"updated_date"`
}

type GetListsOverviewFormat200ApplicationJSONResultsLists struct {
	Books       []GetListsOverviewFormat200ApplicationJSONResultsListsBooks `json:"books"`
	DisplayName *string                                                     `json:"display_name"`
	ListID      *int64                                                      `json:"list_id"`
	ListImage   *string                                                     `json:"list_image"`
	ListName    *string                                                     `json:"list_name"`
	Updated     *string                                                     `json:"updated"`
}

type GetListsOverviewFormat200ApplicationJSONResults struct {
	BestsellersDate *string                                                `json:"bestsellers_date"`
	Lists           []GetListsOverviewFormat200ApplicationJSONResultsLists `json:"lists"`
	PublishedDate   *string                                                `json:"published_date"`
}

type GetListsOverviewFormat200ApplicationJSON struct {
	Copyright  *string                                          `json:"copyright"`
	NumResults *int64                                           `json:"num_results"`
	Results    *GetListsOverviewFormat200ApplicationJSONResults `json:"results"`
	Status     *string                                          `json:"status"`
}

type GetListsOverviewFormatResponse struct {
	ContentType                                    string
	GetListsOverviewFormat200ApplicationJSONObject *GetListsOverviewFormat200ApplicationJSON
	StatusCode                                     int64
}
