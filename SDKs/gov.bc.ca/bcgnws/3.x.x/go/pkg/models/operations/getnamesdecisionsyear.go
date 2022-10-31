package operations




type GetNamesDecisionsYearOutputFormatEnum string

const (
    GetNamesDecisionsYearOutputFormatEnumJSON GetNamesDecisionsYearOutputFormatEnum = "json"
GetNamesDecisionsYearOutputFormatEnumXML GetNamesDecisionsYearOutputFormatEnum = "xml"
GetNamesDecisionsYearOutputFormatEnumKml GetNamesDecisionsYearOutputFormatEnum = "kml"
GetNamesDecisionsYearOutputFormatEnumCsv GetNamesDecisionsYearOutputFormatEnum = "csv"
)



type GetNamesDecisionsYearOutputStyleEnum string

const (
    GetNamesDecisionsYearOutputStyleEnumSummary GetNamesDecisionsYearOutputStyleEnum = "summary"
GetNamesDecisionsYearOutputStyleEnumDetail GetNamesDecisionsYearOutputStyleEnum = "detail"
)



type GetNamesDecisionsYearSortByEnum string

const (
    GetNamesDecisionsYearSortByEnumName GetNamesDecisionsYearSortByEnum = "name"
GetNamesDecisionsYearSortByEnumFeatureType GetNamesDecisionsYearSortByEnum = "featureType"
GetNamesDecisionsYearSortByEnumDecisionDate GetNamesDecisionsYearSortByEnum = "decisionDate"
)


type GetNamesDecisionsYearQueryParams struct {
    Embed *int64 `queryParam:"style=form,explode=true,name=embed"`
    FeatureCategory *string `queryParam:"style=form,explode=true,name=featureCategory"`
    FeatureClass *string `queryParam:"style=form,explode=true,name=featureClass"`
    FeatureType *string `queryParam:"style=form,explode=true,name=featureType"`
    ItemsPerPage *int64 `queryParam:"style=form,explode=true,name=itemsPerPage"`
    OutputFormat GetNamesDecisionsYearOutputFormatEnum `queryParam:"style=form,explode=true,name=outputFormat"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    OutputStyle *GetNamesDecisionsYearOutputStyleEnum `queryParam:"style=form,explode=true,name=outputStyle"`
    SortBy *GetNamesDecisionsYearSortByEnum `queryParam:"style=form,explode=true,name=sortBy"`
    StartIndex *int64 `queryParam:"style=form,explode=true,name=startIndex"`
    Year int64 `queryParam:"style=form,explode=true,name=year"`
    
}

type GetNamesDecisionsYearRequest struct {
    QueryParams GetNamesDecisionsYearQueryParams 
    
}

type GetNamesDecisionsYearResponse struct {
    ContentType string 
    StatusCode int64 
    
}

