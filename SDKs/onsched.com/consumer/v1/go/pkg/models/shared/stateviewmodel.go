package shared

type StateViewModel struct {
	Code        *string `json:"code,omitempty"`
	Country     *string `json:"country,omitempty"`
	CountryName *string `json:"countryName,omitempty"`
	Name        *string `json:"name,omitempty"`
	ObjectName  *string `json:"objectName,omitempty"`
}
