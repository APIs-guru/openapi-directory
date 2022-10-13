package shared

type GoogleTypePostalAddress struct {
	AddressLines       []string `json:"addressLines"`
	AdministrativeArea *string  `json:"administrativeArea"`
	LanguageCode       *string  `json:"languageCode"`
	Locality           *string  `json:"locality"`
	Organization       *string  `json:"organization"`
	PostalCode         *string  `json:"postalCode"`
	Recipients         []string `json:"recipients"`
	RegionCode         *string  `json:"regionCode"`
	Revision           *int32   `json:"revision"`
	SortingCode        *string  `json:"sortingCode"`
	Sublocality        *string  `json:"sublocality"`
}
