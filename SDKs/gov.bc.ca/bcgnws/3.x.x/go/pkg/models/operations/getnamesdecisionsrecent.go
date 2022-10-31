package operations

type GetNamesDecisionsRecentOutputFormatEnum string

const (
	GetNamesDecisionsRecentOutputFormatEnumJSON GetNamesDecisionsRecentOutputFormatEnum = "json"
	GetNamesDecisionsRecentOutputFormatEnumXML  GetNamesDecisionsRecentOutputFormatEnum = "xml"
	GetNamesDecisionsRecentOutputFormatEnumKml  GetNamesDecisionsRecentOutputFormatEnum = "kml"
	GetNamesDecisionsRecentOutputFormatEnumCsv  GetNamesDecisionsRecentOutputFormatEnum = "csv"
)

type GetNamesDecisionsRecentOutputStyleEnum string

const (
	GetNamesDecisionsRecentOutputStyleEnumSummary GetNamesDecisionsRecentOutputStyleEnum = "summary"
	GetNamesDecisionsRecentOutputStyleEnumDetail  GetNamesDecisionsRecentOutputStyleEnum = "detail"
)

type GetNamesDecisionsRecentSortByEnum string

const (
	GetNamesDecisionsRecentSortByEnumName         GetNamesDecisionsRecentSortByEnum = "name"
	GetNamesDecisionsRecentSortByEnumFeatureType  GetNamesDecisionsRecentSortByEnum = "featureType"
	GetNamesDecisionsRecentSortByEnumDecisionDate GetNamesDecisionsRecentSortByEnum = "decisionDate"
)

type GetNamesDecisionsRecentQueryParams struct {
	Days            int64                                   `queryParam:"style=form,explode=true,name=days"`
	Embed           *int64                                  `queryParam:"style=form,explode=true,name=embed"`
	FeatureCategory *string                                 `queryParam:"style=form,explode=true,name=featureCategory"`
	FeatureClass    *string                                 `queryParam:"style=form,explode=true,name=featureClass"`
	FeatureType     *string                                 `queryParam:"style=form,explode=true,name=featureType"`
	ItemsPerPage    *int64                                  `queryParam:"style=form,explode=true,name=itemsPerPage"`
	OutputFormat    GetNamesDecisionsRecentOutputFormatEnum `queryParam:"style=form,explode=true,name=outputFormat"`
	OutputSrs       *int64                                  `queryParam:"style=form,explode=true,name=outputSRS"`
	OutputStyle     *GetNamesDecisionsRecentOutputStyleEnum `queryParam:"style=form,explode=true,name=outputStyle"`
	SortBy          *GetNamesDecisionsRecentSortByEnum      `queryParam:"style=form,explode=true,name=sortBy"`
	StartIndex      *int64                                  `queryParam:"style=form,explode=true,name=startIndex"`
}

type GetNamesDecisionsRecentRequest struct {
	QueryParams GetNamesDecisionsRecentQueryParams
}

type GetNamesDecisionsRecentResponse struct {
	ContentType string
	StatusCode  int64
}
