package operations




type GetNamesSearchOutputFormatEnum string

const (
    GetNamesSearchOutputFormatEnumJSON GetNamesSearchOutputFormatEnum = "json"
GetNamesSearchOutputFormatEnumXML GetNamesSearchOutputFormatEnum = "xml"
GetNamesSearchOutputFormatEnumKml GetNamesSearchOutputFormatEnum = "kml"
GetNamesSearchOutputFormatEnumCsv GetNamesSearchOutputFormatEnum = "csv"
)



type GetNamesSearchOutputStyleEnum string

const (
    GetNamesSearchOutputStyleEnumSummary GetNamesSearchOutputStyleEnum = "summary"
GetNamesSearchOutputStyleEnumDetail GetNamesSearchOutputStyleEnum = "detail"
)



type GetNamesSearchSortByEnum string

const (
    GetNamesSearchSortByEnumRelevance GetNamesSearchSortByEnum = "relevance"
GetNamesSearchSortByEnumName GetNamesSearchSortByEnum = "name"
GetNamesSearchSortByEnumFeatureType GetNamesSearchSortByEnum = "featureType"
GetNamesSearchSortByEnumDecisionDate GetNamesSearchSortByEnum = "decisionDate"
)


type GetNamesSearchQueryParams struct {
    Embed *int64 `queryParam:"style=form,explode=true,name=embed"`
    ExactSpelling *int64 `queryParam:"style=form,explode=true,name=exactSpelling"`
    FeatureCategory *string `queryParam:"style=form,explode=true,name=featureCategory"`
    FeatureClass *string `queryParam:"style=form,explode=true,name=featureClass"`
    FeatureType *string `queryParam:"style=form,explode=true,name=featureType"`
    ItemsPerPage *int64 `queryParam:"style=form,explode=true,name=itemsPerPage"`
    Name string `queryParam:"style=form,explode=true,name=name"`
    OutputFormat GetNamesSearchOutputFormatEnum `queryParam:"style=form,explode=true,name=outputFormat"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    OutputStyle *GetNamesSearchOutputStyleEnum `queryParam:"style=form,explode=true,name=outputStyle"`
    SortBy *GetNamesSearchSortByEnum `queryParam:"style=form,explode=true,name=sortBy"`
    StartIndex *int64 `queryParam:"style=form,explode=true,name=startIndex"`
    
}

type GetNamesSearchRequest struct {
    QueryParams GetNamesSearchQueryParams 
    
}

type GetNamesSearchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

