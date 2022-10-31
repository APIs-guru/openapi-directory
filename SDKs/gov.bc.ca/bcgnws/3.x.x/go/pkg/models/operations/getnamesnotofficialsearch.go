package operations




type GetNamesNotOfficialSearchOutputFormatEnum string

const (
    GetNamesNotOfficialSearchOutputFormatEnumJSON GetNamesNotOfficialSearchOutputFormatEnum = "json"
GetNamesNotOfficialSearchOutputFormatEnumXML GetNamesNotOfficialSearchOutputFormatEnum = "xml"
GetNamesNotOfficialSearchOutputFormatEnumKml GetNamesNotOfficialSearchOutputFormatEnum = "kml"
GetNamesNotOfficialSearchOutputFormatEnumCsv GetNamesNotOfficialSearchOutputFormatEnum = "csv"
)



type GetNamesNotOfficialSearchOutputStyleEnum string

const (
    GetNamesNotOfficialSearchOutputStyleEnumSummary GetNamesNotOfficialSearchOutputStyleEnum = "summary"
GetNamesNotOfficialSearchOutputStyleEnumDetail GetNamesNotOfficialSearchOutputStyleEnum = "detail"
)



type GetNamesNotOfficialSearchSortByEnum string

const (
    GetNamesNotOfficialSearchSortByEnumRelevance GetNamesNotOfficialSearchSortByEnum = "relevance"
GetNamesNotOfficialSearchSortByEnumName GetNamesNotOfficialSearchSortByEnum = "name"
GetNamesNotOfficialSearchSortByEnumFeatureType GetNamesNotOfficialSearchSortByEnum = "featureType"
GetNamesNotOfficialSearchSortByEnumDecisionDate GetNamesNotOfficialSearchSortByEnum = "decisionDate"
)


type GetNamesNotOfficialSearchQueryParams struct {
    Embed *int64 `queryParam:"style=form,explode=true,name=embed"`
    ExactSpelling *int64 `queryParam:"style=form,explode=true,name=exactSpelling"`
    FeatureCategory *string `queryParam:"style=form,explode=true,name=featureCategory"`
    FeatureClass *string `queryParam:"style=form,explode=true,name=featureClass"`
    FeatureType *string `queryParam:"style=form,explode=true,name=featureType"`
    ItemsPerPage *int64 `queryParam:"style=form,explode=true,name=itemsPerPage"`
    Name string `queryParam:"style=form,explode=true,name=name"`
    OutputFormat GetNamesNotOfficialSearchOutputFormatEnum `queryParam:"style=form,explode=true,name=outputFormat"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    OutputStyle *GetNamesNotOfficialSearchOutputStyleEnum `queryParam:"style=form,explode=true,name=outputStyle"`
    SortBy *GetNamesNotOfficialSearchSortByEnum `queryParam:"style=form,explode=true,name=sortBy"`
    StartIndex *int64 `queryParam:"style=form,explode=true,name=startIndex"`
    
}

type GetNamesNotOfficialSearchRequest struct {
    QueryParams GetNamesNotOfficialSearchQueryParams 
    
}

type GetNamesNotOfficialSearchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

