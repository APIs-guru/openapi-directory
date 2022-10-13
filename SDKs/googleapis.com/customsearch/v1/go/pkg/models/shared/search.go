package shared

type SearchQueriesNextPage struct {
	Count                  *int32  `json:"count"`
	Cr                     *string `json:"cr"`
	Cx                     *string `json:"cx"`
	DateRestrict           *string `json:"dateRestrict"`
	DisableCnTwTranslation *string `json:"disableCnTwTranslation"`
	ExactTerms             *string `json:"exactTerms"`
	ExcludeTerms           *string `json:"excludeTerms"`
	FileType               *string `json:"fileType"`
	Filter                 *string `json:"filter"`
	Gl                     *string `json:"gl"`
	GoogleHost             *string `json:"googleHost"`
	HighRange              *string `json:"highRange"`
	Hl                     *string `json:"hl"`
	Hq                     *string `json:"hq"`
	ImgColorType           *string `json:"imgColorType"`
	ImgDominantColor       *string `json:"imgDominantColor"`
	ImgSize                *string `json:"imgSize"`
	ImgType                *string `json:"imgType"`
	InputEncoding          *string `json:"inputEncoding"`
	Language               *string `json:"language"`
	LinkSite               *string `json:"linkSite"`
	LowRange               *string `json:"lowRange"`
	OrTerms                *string `json:"orTerms"`
	OutputEncoding         *string `json:"outputEncoding"`
	RelatedSite            *string `json:"relatedSite"`
	Rights                 *string `json:"rights"`
	Safe                   *string `json:"safe"`
	SearchTerms            *string `json:"searchTerms"`
	SearchType             *string `json:"searchType"`
	SiteSearch             *string `json:"siteSearch"`
	SiteSearchFilter       *string `json:"siteSearchFilter"`
	Sort                   *string `json:"sort"`
	StartIndex             *int32  `json:"startIndex"`
	StartPage              *int32  `json:"startPage"`
	Title                  *string `json:"title"`
	TotalResults           *string `json:"totalResults"`
}

type SearchQueriesPreviousPage struct {
	Count                  *int32  `json:"count"`
	Cr                     *string `json:"cr"`
	Cx                     *string `json:"cx"`
	DateRestrict           *string `json:"dateRestrict"`
	DisableCnTwTranslation *string `json:"disableCnTwTranslation"`
	ExactTerms             *string `json:"exactTerms"`
	ExcludeTerms           *string `json:"excludeTerms"`
	FileType               *string `json:"fileType"`
	Filter                 *string `json:"filter"`
	Gl                     *string `json:"gl"`
	GoogleHost             *string `json:"googleHost"`
	HighRange              *string `json:"highRange"`
	Hl                     *string `json:"hl"`
	Hq                     *string `json:"hq"`
	ImgColorType           *string `json:"imgColorType"`
	ImgDominantColor       *string `json:"imgDominantColor"`
	ImgSize                *string `json:"imgSize"`
	ImgType                *string `json:"imgType"`
	InputEncoding          *string `json:"inputEncoding"`
	Language               *string `json:"language"`
	LinkSite               *string `json:"linkSite"`
	LowRange               *string `json:"lowRange"`
	OrTerms                *string `json:"orTerms"`
	OutputEncoding         *string `json:"outputEncoding"`
	RelatedSite            *string `json:"relatedSite"`
	Rights                 *string `json:"rights"`
	Safe                   *string `json:"safe"`
	SearchTerms            *string `json:"searchTerms"`
	SearchType             *string `json:"searchType"`
	SiteSearch             *string `json:"siteSearch"`
	SiteSearchFilter       *string `json:"siteSearchFilter"`
	Sort                   *string `json:"sort"`
	StartIndex             *int32  `json:"startIndex"`
	StartPage              *int32  `json:"startPage"`
	Title                  *string `json:"title"`
	TotalResults           *string `json:"totalResults"`
}

type SearchQueriesRequest struct {
	Count                  *int32  `json:"count"`
	Cr                     *string `json:"cr"`
	Cx                     *string `json:"cx"`
	DateRestrict           *string `json:"dateRestrict"`
	DisableCnTwTranslation *string `json:"disableCnTwTranslation"`
	ExactTerms             *string `json:"exactTerms"`
	ExcludeTerms           *string `json:"excludeTerms"`
	FileType               *string `json:"fileType"`
	Filter                 *string `json:"filter"`
	Gl                     *string `json:"gl"`
	GoogleHost             *string `json:"googleHost"`
	HighRange              *string `json:"highRange"`
	Hl                     *string `json:"hl"`
	Hq                     *string `json:"hq"`
	ImgColorType           *string `json:"imgColorType"`
	ImgDominantColor       *string `json:"imgDominantColor"`
	ImgSize                *string `json:"imgSize"`
	ImgType                *string `json:"imgType"`
	InputEncoding          *string `json:"inputEncoding"`
	Language               *string `json:"language"`
	LinkSite               *string `json:"linkSite"`
	LowRange               *string `json:"lowRange"`
	OrTerms                *string `json:"orTerms"`
	OutputEncoding         *string `json:"outputEncoding"`
	RelatedSite            *string `json:"relatedSite"`
	Rights                 *string `json:"rights"`
	Safe                   *string `json:"safe"`
	SearchTerms            *string `json:"searchTerms"`
	SearchType             *string `json:"searchType"`
	SiteSearch             *string `json:"siteSearch"`
	SiteSearchFilter       *string `json:"siteSearchFilter"`
	Sort                   *string `json:"sort"`
	StartIndex             *int32  `json:"startIndex"`
	StartPage              *int32  `json:"startPage"`
	Title                  *string `json:"title"`
	TotalResults           *string `json:"totalResults"`
}

type SearchQueries struct {
	NextPage     []SearchQueriesNextPage     `json:"nextPage"`
	PreviousPage []SearchQueriesPreviousPage `json:"previousPage"`
	Request      []SearchQueriesRequest      `json:"request"`
}

type SearchSearchInformation struct {
	FormattedSearchTime   *string  `json:"formattedSearchTime"`
	FormattedTotalResults *string  `json:"formattedTotalResults"`
	SearchTime            *float64 `json:"searchTime"`
	TotalResults          *string  `json:"totalResults"`
}

type SearchSpelling struct {
	CorrectedQuery     *string `json:"correctedQuery"`
	HTMLCorrectedQuery *string `json:"htmlCorrectedQuery"`
}

type SearchURL struct {
	Template *string `json:"template"`
	Type     *string `json:"type"`
}

type Search struct {
	Context           map[string]interface{}   `json:"context"`
	Items             []Result                 `json:"items"`
	Kind              *string                  `json:"kind"`
	Promotions        []Promotion              `json:"promotions"`
	Queries           *SearchQueries           `json:"queries"`
	SearchInformation *SearchSearchInformation `json:"searchInformation"`
	Spelling          *SearchSpelling          `json:"spelling"`
	URL               *SearchURL               `json:"url"`
}
