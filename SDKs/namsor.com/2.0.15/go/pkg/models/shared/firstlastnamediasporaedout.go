package shared

type FirstLastNameDiasporaedOut struct {
	CountryIso2    *string  `json:"countryIso2"`
	EthnicitiesTop []string `json:"ethnicitiesTop"`
	Ethnicity      *string  `json:"ethnicity"`
	EthnicityAlt   *string  `json:"ethnicityAlt"`
	FirstName      *string  `json:"firstName"`
	ID             *string  `json:"id"`
	LastName       *string  `json:"lastName"`
	Lifted         *bool    `json:"lifted"`
	Score          *float64 `json:"score"`
	Script         *string  `json:"script"`
}
