package operations

import (
"openapi/pkg/models/shared")


type GetListsOverviewFormatFormatEnum string

const (
    GetListsOverviewFormatFormatEnumJSON GetListsOverviewFormatFormatEnum = "json"
GetListsOverviewFormatFormatEnumJsonp GetListsOverviewFormatFormatEnum = "jsonp"
)


type GetListsOverviewFormatPathParams struct {
    Format GetListsOverviewFormatFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type GetListsOverviewFormatQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api-key"`
    PublishedDate *string `queryParam:"style=form,explode=true,name=published_date"`
    
}

type GetListsOverviewFormatSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetListsOverviewFormatRequest struct {
    PathParams GetListsOverviewFormatPathParams 
    QueryParams GetListsOverviewFormatQueryParams 
    Security GetListsOverviewFormatSecurity 
    
}

type GetListsOverviewFormat200ApplicationJSONResultsListsBooks struct {
    AgeGroup *string `json:"age_group,omitempty"`
    Author *string `json:"author,omitempty"`
    Contributor *string `json:"contributor,omitempty"`
    ContributorNote *string `json:"contributor_note,omitempty"`
    CreatedDate *string `json:"created_date,omitempty"`
    Description *string `json:"description,omitempty"`
    Price *int64 `json:"price,omitempty"`
    PrimaryIsbn10 *string `json:"primary_isbn10,omitempty"`
    PrimaryIsbn13 *string `json:"primary_isbn13,omitempty"`
    Publisher *string `json:"publisher,omitempty"`
    Rank *int64 `json:"rank,omitempty"`
    Title *string `json:"title,omitempty"`
    UpdatedDate *string `json:"updated_date,omitempty"`
    
}

type GetListsOverviewFormat200ApplicationJSONResultsLists struct {
    Books []GetListsOverviewFormat200ApplicationJSONResultsListsBooks `json:"books,omitempty"`
    DisplayName *string `json:"display_name,omitempty"`
    ListID *int64 `json:"list_id,omitempty"`
    ListImage *string `json:"list_image,omitempty"`
    ListName *string `json:"list_name,omitempty"`
    Updated *string `json:"updated,omitempty"`
    
}

type GetListsOverviewFormat200ApplicationJSONResults struct {
    BestsellersDate *string `json:"bestsellers_date,omitempty"`
    Lists []GetListsOverviewFormat200ApplicationJSONResultsLists `json:"lists,omitempty"`
    PublishedDate *string `json:"published_date,omitempty"`
    
}

type GetListsOverviewFormat200ApplicationJSON struct {
    Copyright *string `json:"copyright,omitempty"`
    NumResults *int64 `json:"num_results,omitempty"`
    Results *GetListsOverviewFormat200ApplicationJSONResults `json:"results,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

type GetListsOverviewFormatResponse struct {
    ContentType string 
    GetListsOverviewFormat200ApplicationJSONObject *GetListsOverviewFormat200ApplicationJSON 
    StatusCode int64 
    
}

