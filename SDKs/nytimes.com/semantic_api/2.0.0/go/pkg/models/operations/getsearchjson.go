package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchJSONFieldsEnum string

const (
	GetSearchJSONFieldsEnumAll            GetSearchJSONFieldsEnum = "all"
	GetSearchJSONFieldsEnumPages          GetSearchJSONFieldsEnum = "pages"
	GetSearchJSONFieldsEnumTickerSymbol   GetSearchJSONFieldsEnum = "ticker_symbol"
	GetSearchJSONFieldsEnumLinks          GetSearchJSONFieldsEnum = "links"
	GetSearchJSONFieldsEnumTaxonomy       GetSearchJSONFieldsEnum = "taxonomy"
	GetSearchJSONFieldsEnumCombinations   GetSearchJSONFieldsEnum = "combinations"
	GetSearchJSONFieldsEnumGeocodes       GetSearchJSONFieldsEnum = "geocodes"
	GetSearchJSONFieldsEnumArticleList    GetSearchJSONFieldsEnum = "article_list"
	GetSearchJSONFieldsEnumScopeNotes     GetSearchJSONFieldsEnum = "scope_notes"
	GetSearchJSONFieldsEnumSearchAPIQuery GetSearchJSONFieldsEnum = "search_api_query"
)

type GetSearchJSONQueryParams struct {
	Fields *GetSearchJSONFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	Offset *int64                   `queryParam:"style=form,explode=true,name=offset"`
	Query  string                   `queryParam:"style=form,explode=true,name=query"`
}

type GetSearchJSON200ApplicationJSON struct {
	Copyright  *string                  `json:"copyright,omitempty"`
	NumResults *int64                   `json:"num_results,omitempty"`
	Results    []shared.ConceptRelation `json:"results,omitempty"`
	Status     *string                  `json:"status,omitempty"`
}

type GetSearchJSONRequest struct {
	QueryParams GetSearchJSONQueryParams
}

type GetSearchJSONResponse struct {
	ContentType                           string
	GetSearchJSON200ApplicationJSONObject *GetSearchJSON200ApplicationJSON
	StatusCode                            int64
}
