package shared

type TimezoneViewModel struct {
	Regions   []string             `json:"regions,omitempty"`
	Timezones []TimezonesViewModel `json:"timezones,omitempty"`
}
