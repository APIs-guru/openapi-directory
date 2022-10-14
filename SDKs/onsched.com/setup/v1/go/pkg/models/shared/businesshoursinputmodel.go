package shared

type BusinessHoursInputModel struct {
	Fri *BusinessHourInputModel `json:"fri,omitempty"`
	Mon *BusinessHourInputModel `json:"mon,omitempty"`
	Sat *BusinessHourInputModel `json:"sat,omitempty"`
	Sun *BusinessHourInputModel `json:"sun,omitempty"`
	Thu *BusinessHourInputModel `json:"thu,omitempty"`
	Tue *BusinessHourInputModel `json:"tue,omitempty"`
	Wed *BusinessHourInputModel `json:"wed,omitempty"`
}
