package shared

type CustomApp struct {
	LanguageCode  *string        `json:"languageCode"`
	Organizations []Organization `json:"organizations"`
	PackageName   *string        `json:"packageName"`
	Title         *string        `json:"title"`
}
