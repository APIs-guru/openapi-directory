package shared

type LiaSettings struct {
	AccountID       *string              `json:"accountId,omitempty"`
	CountrySettings []LiaCountrySettings `json:"countrySettings,omitempty"`
	Kind            *string              `json:"kind,omitempty"`
}
