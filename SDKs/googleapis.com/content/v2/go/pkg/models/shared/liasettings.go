package shared

type LiaSettings struct {
	AccountID       *string              `json:"accountId"`
	CountrySettings []LiaCountrySettings `json:"countrySettings"`
	Kind            *string              `json:"kind"`
}
