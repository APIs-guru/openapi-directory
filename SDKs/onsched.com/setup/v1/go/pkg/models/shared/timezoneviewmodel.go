package shared

type TimezoneViewModel struct {
	Regions   []string             `json:"regions"`
	Timezones []TimezonesViewModel `json:"timezones"`
}
