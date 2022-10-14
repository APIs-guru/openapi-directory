package shared

type Dataset struct {
	Name     *string `json:"name,omitempty"`
	TimeZone *string `json:"timeZone,omitempty"`
}
