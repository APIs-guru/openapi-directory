package shared

type ListingsProviderInfo struct {
	ChannelMappings   []NameValuePair `json:"ChannelMappings"`
	Country           *string         `json:"Country"`
	EnableAllTuners   *bool           `json:"EnableAllTuners"`
	EnabledTuners     []string        `json:"EnabledTuners"`
	ID                *string         `json:"Id"`
	KidsCategories    []string        `json:"KidsCategories"`
	ListingsID        *string         `json:"ListingsId"`
	MovieCategories   []string        `json:"MovieCategories"`
	MoviePrefix       *string         `json:"MoviePrefix"`
	NewsCategories    []string        `json:"NewsCategories"`
	Password          *string         `json:"Password"`
	Path              *string         `json:"Path"`
	PreferredLanguage *string         `json:"PreferredLanguage"`
	SportsCategories  []string        `json:"SportsCategories"`
	Type              *string         `json:"Type"`
	UserAgent         *string         `json:"UserAgent"`
	Username          *string         `json:"Username"`
	ZipCode           *string         `json:"ZipCode"`
}
