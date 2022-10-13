package operations

type GetNamesInsideOutputFormatEnum string

const (
	GetNamesInsideOutputFormatEnumJSON GetNamesInsideOutputFormatEnum = "json"
	GetNamesInsideOutputFormatEnumXML  GetNamesInsideOutputFormatEnum = "xml"
	GetNamesInsideOutputFormatEnumKml  GetNamesInsideOutputFormatEnum = "kml"
	GetNamesInsideOutputFormatEnumCsv  GetNamesInsideOutputFormatEnum = "csv"
)

type GetNamesInsideOutputStyleEnum string

const (
	GetNamesInsideOutputStyleEnumSummary GetNamesInsideOutputStyleEnum = "summary"
	GetNamesInsideOutputStyleEnumDetail  GetNamesInsideOutputStyleEnum = "detail"
)

type GetNamesInsideSortByEnum string

const (
	GetNamesInsideSortByEnumName         GetNamesInsideSortByEnum = "name"
	GetNamesInsideSortByEnumFeatureType  GetNamesInsideSortByEnum = "featureType"
	GetNamesInsideSortByEnumDecisionDate GetNamesInsideSortByEnum = "decisionDate"
)

type GetNamesInsideQueryParams struct {
	Bbox            string                         `queryParam:"style=form,explode=true,name=bbox"`
	Embed           *int64                         `queryParam:"style=form,explode=true,name=embed"`
	FeatureCategory *string                        `queryParam:"style=form,explode=true,name=featureCategory"`
	FeatureClass    *string                        `queryParam:"style=form,explode=true,name=featureClass"`
	FeatureType     *string                        `queryParam:"style=form,explode=true,name=featureType"`
	ItemsPerPage    *int64                         `queryParam:"style=form,explode=true,name=itemsPerPage"`
	OutputFormat    GetNamesInsideOutputFormatEnum `queryParam:"style=form,explode=true,name=outputFormat"`
	OutputSrs       *int64                         `queryParam:"style=form,explode=true,name=outputSRS"`
	OutputStyle     *GetNamesInsideOutputStyleEnum `queryParam:"style=form,explode=true,name=outputStyle"`
	SortBy          *GetNamesInsideSortByEnum      `queryParam:"style=form,explode=true,name=sortBy"`
	StartIndex      *int64                         `queryParam:"style=form,explode=true,name=startIndex"`
}

type GetNamesInsideRequest struct {
	QueryParams GetNamesInsideQueryParams
}

type GetNamesInsideResponse struct {
	ContentType string
	StatusCode  int64
}
