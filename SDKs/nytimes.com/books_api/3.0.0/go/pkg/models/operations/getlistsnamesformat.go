package operations

import (
	"openapi/pkg/models/shared"
)

type GetListsNamesFormatFormatEnum string

const (
	GetListsNamesFormatFormatEnumJSON  GetListsNamesFormatFormatEnum = "json"
	GetListsNamesFormatFormatEnumJsonp GetListsNamesFormatFormatEnum = "jsonp"
)

type GetListsNamesFormatPathParams struct {
	Format GetListsNamesFormatFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type GetListsNamesFormatQueryParams struct {
	APIKey *string `queryParam:"style=form,explode=true,name=api-key"`
}

type GetListsNamesFormatSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetListsNamesFormatRequest struct {
	PathParams  GetListsNamesFormatPathParams
	QueryParams GetListsNamesFormatQueryParams
	Security    GetListsNamesFormatSecurity
}

type GetListsNamesFormat200ApplicationJSONResults struct {
	DisplayName         *string `json:"display_name,omitempty"`
	ListName            *string `json:"list_name,omitempty"`
	ListNameEncoded     *string `json:"list_name_encoded,omitempty"`
	NewestPublishedDate *string `json:"newest_published_date,omitempty"`
	OldestPublishedDate *string `json:"oldest_published_date,omitempty"`
	Updated             *string `json:"updated,omitempty"`
}

type GetListsNamesFormat200ApplicationJSON struct {
	Copyright  *string                                        `json:"copyright,omitempty"`
	NumResults *int64                                         `json:"num_results,omitempty"`
	Results    []GetListsNamesFormat200ApplicationJSONResults `json:"results,omitempty"`
	Status     *string                                        `json:"status,omitempty"`
}

type GetListsNamesFormatResponse struct {
	ContentType                                 string
	GetListsNamesFormat200ApplicationJSONObject *GetListsNamesFormat200ApplicationJSON
	StatusCode                                  int64
}
