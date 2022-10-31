package operations




type GetNamesChangesOutputFormatEnum string

const (
    GetNamesChangesOutputFormatEnumJSON GetNamesChangesOutputFormatEnum = "json"
GetNamesChangesOutputFormatEnumXML GetNamesChangesOutputFormatEnum = "xml"
GetNamesChangesOutputFormatEnumKml GetNamesChangesOutputFormatEnum = "kml"
GetNamesChangesOutputFormatEnumCsv GetNamesChangesOutputFormatEnum = "csv"
)



type GetNamesChangesOutputStyleEnum string

const (
    GetNamesChangesOutputStyleEnumSummary GetNamesChangesOutputStyleEnum = "summary"
GetNamesChangesOutputStyleEnumDetail GetNamesChangesOutputStyleEnum = "detail"
)



type GetNamesChangesSortByEnum string

const (
    GetNamesChangesSortByEnumName GetNamesChangesSortByEnum = "name"
GetNamesChangesSortByEnumFeatureType GetNamesChangesSortByEnum = "featureType"
GetNamesChangesSortByEnumDecisionDate GetNamesChangesSortByEnum = "decisionDate"
)


type GetNamesChangesQueryParams struct {
    Embed *int64 `queryParam:"style=form,explode=true,name=embed"`
    FeatureCategory *string `queryParam:"style=form,explode=true,name=featureCategory"`
    FeatureClass *string `queryParam:"style=form,explode=true,name=featureClass"`
    FeatureType *string `queryParam:"style=form,explode=true,name=featureType"`
    FromDate int64 `queryParam:"style=form,explode=true,name=fromDate"`
    ItemsPerPage *int64 `queryParam:"style=form,explode=true,name=itemsPerPage"`
    OutputFormat GetNamesChangesOutputFormatEnum `queryParam:"style=form,explode=true,name=outputFormat"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    OutputStyle *GetNamesChangesOutputStyleEnum `queryParam:"style=form,explode=true,name=outputStyle"`
    SortBy *GetNamesChangesSortByEnum `queryParam:"style=form,explode=true,name=sortBy"`
    StartIndex *int64 `queryParam:"style=form,explode=true,name=startIndex"`
    ToDate int64 `queryParam:"style=form,explode=true,name=toDate"`
    
}

type GetNamesChangesRequest struct {
    QueryParams GetNamesChangesQueryParams 
    
}

type GetNamesChangesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

