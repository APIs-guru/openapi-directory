package operations

type GetNamesOfficialSearchOutputFormatEnum string

const (
	GetNamesOfficialSearchOutputFormatEnumJSON GetNamesOfficialSearchOutputFormatEnum = "json"
	GetNamesOfficialSearchOutputFormatEnumXML  GetNamesOfficialSearchOutputFormatEnum = "xml"
	GetNamesOfficialSearchOutputFormatEnumKml  GetNamesOfficialSearchOutputFormatEnum = "kml"
	GetNamesOfficialSearchOutputFormatEnumCsv  GetNamesOfficialSearchOutputFormatEnum = "csv"
)

type GetNamesOfficialSearchOutputStyleEnum string

const (
	GetNamesOfficialSearchOutputStyleEnumSummary GetNamesOfficialSearchOutputStyleEnum = "summary"
	GetNamesOfficialSearchOutputStyleEnumDetail  GetNamesOfficialSearchOutputStyleEnum = "detail"
)

type GetNamesOfficialSearchSortByEnum string

const (
	GetNamesOfficialSearchSortByEnumRelevance    GetNamesOfficialSearchSortByEnum = "relevance"
	GetNamesOfficialSearchSortByEnumName         GetNamesOfficialSearchSortByEnum = "name"
	GetNamesOfficialSearchSortByEnumFeatureType  GetNamesOfficialSearchSortByEnum = "featureType"
	GetNamesOfficialSearchSortByEnumDecisionDate GetNamesOfficialSearchSortByEnum = "decisionDate"
)

type GetNamesOfficialSearchQueryParams struct {
	Embed           *int64                                 `queryParam:"style=form,explode=true,name=embed"`
	ExactSpelling   *int64                                 `queryParam:"style=form,explode=true,name=exactSpelling"`
	FeatureCategory *string                                `queryParam:"style=form,explode=true,name=featureCategory"`
	FeatureClass    *string                                `queryParam:"style=form,explode=true,name=featureClass"`
	FeatureType     *string                                `queryParam:"style=form,explode=true,name=featureType"`
	ItemsPerPage    *int64                                 `queryParam:"style=form,explode=true,name=itemsPerPage"`
	Name            string                                 `queryParam:"style=form,explode=true,name=name"`
	OutputFormat    GetNamesOfficialSearchOutputFormatEnum `queryParam:"style=form,explode=true,name=outputFormat"`
	OutputSrs       *int64                                 `queryParam:"style=form,explode=true,name=outputSRS"`
	OutputStyle     *GetNamesOfficialSearchOutputStyleEnum `queryParam:"style=form,explode=true,name=outputStyle"`
	SortBy          *GetNamesOfficialSearchSortByEnum      `queryParam:"style=form,explode=true,name=sortBy"`
	StartIndex      *int64                                 `queryParam:"style=form,explode=true,name=startIndex"`
}

type GetNamesOfficialSearchRequest struct {
	QueryParams GetNamesOfficialSearchQueryParams
}

type GetNamesOfficialSearchResponse struct {
	ContentType string
	StatusCode  int64
}
