package shared



type SearchQueriesNextPage struct {
    Count *int32 `json:"count,omitempty"`
    Cr *string `json:"cr,omitempty"`
    Cx *string `json:"cx,omitempty"`
    DateRestrict *string `json:"dateRestrict,omitempty"`
    DisableCnTwTranslation *string `json:"disableCnTwTranslation,omitempty"`
    ExactTerms *string `json:"exactTerms,omitempty"`
    ExcludeTerms *string `json:"excludeTerms,omitempty"`
    FileType *string `json:"fileType,omitempty"`
    Filter *string `json:"filter,omitempty"`
    Gl *string `json:"gl,omitempty"`
    GoogleHost *string `json:"googleHost,omitempty"`
    HighRange *string `json:"highRange,omitempty"`
    Hl *string `json:"hl,omitempty"`
    Hq *string `json:"hq,omitempty"`
    ImgColorType *string `json:"imgColorType,omitempty"`
    ImgDominantColor *string `json:"imgDominantColor,omitempty"`
    ImgSize *string `json:"imgSize,omitempty"`
    ImgType *string `json:"imgType,omitempty"`
    InputEncoding *string `json:"inputEncoding,omitempty"`
    Language *string `json:"language,omitempty"`
    LinkSite *string `json:"linkSite,omitempty"`
    LowRange *string `json:"lowRange,omitempty"`
    OrTerms *string `json:"orTerms,omitempty"`
    OutputEncoding *string `json:"outputEncoding,omitempty"`
    RelatedSite *string `json:"relatedSite,omitempty"`
    Rights *string `json:"rights,omitempty"`
    Safe *string `json:"safe,omitempty"`
    SearchTerms *string `json:"searchTerms,omitempty"`
    SearchType *string `json:"searchType,omitempty"`
    SiteSearch *string `json:"siteSearch,omitempty"`
    SiteSearchFilter *string `json:"siteSearchFilter,omitempty"`
    Sort *string `json:"sort,omitempty"`
    StartIndex *int32 `json:"startIndex,omitempty"`
    StartPage *int32 `json:"startPage,omitempty"`
    Title *string `json:"title,omitempty"`
    TotalResults *string `json:"totalResults,omitempty"`
    
}

type SearchQueriesPreviousPage struct {
    Count *int32 `json:"count,omitempty"`
    Cr *string `json:"cr,omitempty"`
    Cx *string `json:"cx,omitempty"`
    DateRestrict *string `json:"dateRestrict,omitempty"`
    DisableCnTwTranslation *string `json:"disableCnTwTranslation,omitempty"`
    ExactTerms *string `json:"exactTerms,omitempty"`
    ExcludeTerms *string `json:"excludeTerms,omitempty"`
    FileType *string `json:"fileType,omitempty"`
    Filter *string `json:"filter,omitempty"`
    Gl *string `json:"gl,omitempty"`
    GoogleHost *string `json:"googleHost,omitempty"`
    HighRange *string `json:"highRange,omitempty"`
    Hl *string `json:"hl,omitempty"`
    Hq *string `json:"hq,omitempty"`
    ImgColorType *string `json:"imgColorType,omitempty"`
    ImgDominantColor *string `json:"imgDominantColor,omitempty"`
    ImgSize *string `json:"imgSize,omitempty"`
    ImgType *string `json:"imgType,omitempty"`
    InputEncoding *string `json:"inputEncoding,omitempty"`
    Language *string `json:"language,omitempty"`
    LinkSite *string `json:"linkSite,omitempty"`
    LowRange *string `json:"lowRange,omitempty"`
    OrTerms *string `json:"orTerms,omitempty"`
    OutputEncoding *string `json:"outputEncoding,omitempty"`
    RelatedSite *string `json:"relatedSite,omitempty"`
    Rights *string `json:"rights,omitempty"`
    Safe *string `json:"safe,omitempty"`
    SearchTerms *string `json:"searchTerms,omitempty"`
    SearchType *string `json:"searchType,omitempty"`
    SiteSearch *string `json:"siteSearch,omitempty"`
    SiteSearchFilter *string `json:"siteSearchFilter,omitempty"`
    Sort *string `json:"sort,omitempty"`
    StartIndex *int32 `json:"startIndex,omitempty"`
    StartPage *int32 `json:"startPage,omitempty"`
    Title *string `json:"title,omitempty"`
    TotalResults *string `json:"totalResults,omitempty"`
    
}

type SearchQueriesRequest struct {
    Count *int32 `json:"count,omitempty"`
    Cr *string `json:"cr,omitempty"`
    Cx *string `json:"cx,omitempty"`
    DateRestrict *string `json:"dateRestrict,omitempty"`
    DisableCnTwTranslation *string `json:"disableCnTwTranslation,omitempty"`
    ExactTerms *string `json:"exactTerms,omitempty"`
    ExcludeTerms *string `json:"excludeTerms,omitempty"`
    FileType *string `json:"fileType,omitempty"`
    Filter *string `json:"filter,omitempty"`
    Gl *string `json:"gl,omitempty"`
    GoogleHost *string `json:"googleHost,omitempty"`
    HighRange *string `json:"highRange,omitempty"`
    Hl *string `json:"hl,omitempty"`
    Hq *string `json:"hq,omitempty"`
    ImgColorType *string `json:"imgColorType,omitempty"`
    ImgDominantColor *string `json:"imgDominantColor,omitempty"`
    ImgSize *string `json:"imgSize,omitempty"`
    ImgType *string `json:"imgType,omitempty"`
    InputEncoding *string `json:"inputEncoding,omitempty"`
    Language *string `json:"language,omitempty"`
    LinkSite *string `json:"linkSite,omitempty"`
    LowRange *string `json:"lowRange,omitempty"`
    OrTerms *string `json:"orTerms,omitempty"`
    OutputEncoding *string `json:"outputEncoding,omitempty"`
    RelatedSite *string `json:"relatedSite,omitempty"`
    Rights *string `json:"rights,omitempty"`
    Safe *string `json:"safe,omitempty"`
    SearchTerms *string `json:"searchTerms,omitempty"`
    SearchType *string `json:"searchType,omitempty"`
    SiteSearch *string `json:"siteSearch,omitempty"`
    SiteSearchFilter *string `json:"siteSearchFilter,omitempty"`
    Sort *string `json:"sort,omitempty"`
    StartIndex *int32 `json:"startIndex,omitempty"`
    StartPage *int32 `json:"startPage,omitempty"`
    Title *string `json:"title,omitempty"`
    TotalResults *string `json:"totalResults,omitempty"`
    
}

type SearchQueries struct {
    NextPage []SearchQueriesNextPage `json:"nextPage,omitempty"`
    PreviousPage []SearchQueriesPreviousPage `json:"previousPage,omitempty"`
    Request []SearchQueriesRequest `json:"request,omitempty"`
    
}

type SearchSearchInformation struct {
    FormattedSearchTime *string `json:"formattedSearchTime,omitempty"`
    FormattedTotalResults *string `json:"formattedTotalResults,omitempty"`
    SearchTime *float64 `json:"searchTime,omitempty"`
    TotalResults *string `json:"totalResults,omitempty"`
    
}

type SearchSpelling struct {
    CorrectedQuery *string `json:"correctedQuery,omitempty"`
    HTMLCorrectedQuery *string `json:"htmlCorrectedQuery,omitempty"`
    
}

type SearchURL struct {
    Template *string `json:"template,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type Search struct {
    Context map[string]interface{} `json:"context,omitempty"`
    Items []Result `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Promotions []Promotion `json:"promotions,omitempty"`
    Queries *SearchQueries `json:"queries,omitempty"`
    SearchInformation *SearchSearchInformation `json:"searchInformation,omitempty"`
    Spelling *SearchSpelling `json:"spelling,omitempty"`
    URL *SearchURL `json:"url,omitempty"`
    
}

