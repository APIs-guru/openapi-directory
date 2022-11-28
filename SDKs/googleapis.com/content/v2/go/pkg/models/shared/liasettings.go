package shared

// LiaSettings
// Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
type LiaSettings struct {
	AccountID       *string              `json:"accountId,omitempty"`
	CountrySettings []LiaCountrySettings `json:"countrySettings,omitempty"`
	Kind            *string              `json:"kind,omitempty"`
}
