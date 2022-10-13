package operations

import (
	"openapi/pkg/models/shared"
)

type GetNameConceptTypeSpecificConceptJSONConceptTypeEnum string

const (
	GetNameConceptTypeSpecificConceptJSONConceptTypeEnumNytdGeo GetNameConceptTypeSpecificConceptJSONConceptTypeEnum = "nytd_geo"
	GetNameConceptTypeSpecificConceptJSONConceptTypeEnumNytdPer GetNameConceptTypeSpecificConceptJSONConceptTypeEnum = "nytd_per"
	GetNameConceptTypeSpecificConceptJSONConceptTypeEnumNytdOrg GetNameConceptTypeSpecificConceptJSONConceptTypeEnum = "nytd_org"
	GetNameConceptTypeSpecificConceptJSONConceptTypeEnumNytdDes GetNameConceptTypeSpecificConceptJSONConceptTypeEnum = "nytd_des"
)

type GetNameConceptTypeSpecificConceptJSONPathParams struct {
	ConceptType     GetNameConceptTypeSpecificConceptJSONConceptTypeEnum `pathParam:"style=simple,explode=false,name=concept-type"`
	SpecificConcept string                                               `pathParam:"style=simple,explode=false,name=specific-concept"`
}

type GetNameConceptTypeSpecificConceptJSONFieldsEnum string

const (
	GetNameConceptTypeSpecificConceptJSONFieldsEnumAll            GetNameConceptTypeSpecificConceptJSONFieldsEnum = "all"
	GetNameConceptTypeSpecificConceptJSONFieldsEnumPages          GetNameConceptTypeSpecificConceptJSONFieldsEnum = "pages"
	GetNameConceptTypeSpecificConceptJSONFieldsEnumTickerSymbol   GetNameConceptTypeSpecificConceptJSONFieldsEnum = "ticker_symbol"
	GetNameConceptTypeSpecificConceptJSONFieldsEnumLinks          GetNameConceptTypeSpecificConceptJSONFieldsEnum = "links"
	GetNameConceptTypeSpecificConceptJSONFieldsEnumTaxonomy       GetNameConceptTypeSpecificConceptJSONFieldsEnum = "taxonomy"
	GetNameConceptTypeSpecificConceptJSONFieldsEnumCombinations   GetNameConceptTypeSpecificConceptJSONFieldsEnum = "combinations"
	GetNameConceptTypeSpecificConceptJSONFieldsEnumGeocodes       GetNameConceptTypeSpecificConceptJSONFieldsEnum = "geocodes"
	GetNameConceptTypeSpecificConceptJSONFieldsEnumArticleList    GetNameConceptTypeSpecificConceptJSONFieldsEnum = "article_list"
	GetNameConceptTypeSpecificConceptJSONFieldsEnumScopeNotes     GetNameConceptTypeSpecificConceptJSONFieldsEnum = "scope_notes"
	GetNameConceptTypeSpecificConceptJSONFieldsEnumSearchAPIQuery GetNameConceptTypeSpecificConceptJSONFieldsEnum = "search_api_query"
)

type GetNameConceptTypeSpecificConceptJSONQueryParams struct {
	Fields *GetNameConceptTypeSpecificConceptJSONFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	Query  string                                           `queryParam:"style=form,explode=true,name=query"`
}

type GetNameConceptTypeSpecificConceptJSONRequest struct {
	PathParams  GetNameConceptTypeSpecificConceptJSONPathParams
	QueryParams GetNameConceptTypeSpecificConceptJSONQueryParams
}

type GetNameConceptTypeSpecificConceptJSON200ApplicationJSON struct {
	Copyright  *string          `json:"copyright"`
	NumResults *int64           `json:"num_results"`
	Results    []shared.Concept `json:"results"`
	Status     *string          `json:"status"`
}

type GetNameConceptTypeSpecificConceptJSONResponse struct {
	ContentType                                                   string
	GetNameConceptTypeSpecificConceptJSON200ApplicationJSONObject *GetNameConceptTypeSpecificConceptJSON200ApplicationJSON
	StatusCode                                                    int64
}
