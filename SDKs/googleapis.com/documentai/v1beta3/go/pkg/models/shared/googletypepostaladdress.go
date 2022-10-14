package shared

type GoogleTypePostalAddress struct {
	AddressLines       []string `json:"addressLines,omitempty"`
	AdministrativeArea *string  `json:"administrativeArea,omitempty"`
	LanguageCode       *string  `json:"languageCode,omitempty"`
	Locality           *string  `json:"locality,omitempty"`
	Organization       *string  `json:"organization,omitempty"`
	PostalCode         *string  `json:"postalCode,omitempty"`
	Recipients         []string `json:"recipients,omitempty"`
	RegionCode         *string  `json:"regionCode,omitempty"`
	Revision           *int32   `json:"revision,omitempty"`
	SortingCode        *string  `json:"sortingCode,omitempty"`
	Sublocality        *string  `json:"sublocality,omitempty"`
}
