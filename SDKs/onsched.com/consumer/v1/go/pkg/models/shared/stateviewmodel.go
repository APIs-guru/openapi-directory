package shared

type StateViewModel struct {
	Code        *string `json:"code"`
	Country     *string `json:"country"`
	CountryName *string `json:"countryName"`
	Name        *string `json:"name"`
	ObjectName  *string `json:"objectName"`
}
