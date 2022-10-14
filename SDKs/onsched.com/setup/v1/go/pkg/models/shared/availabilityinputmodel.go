package shared

type AvailabilityInputModel struct {
	Fri *WeekDayInputModel `json:"fri,omitempty"`
	Mon *WeekDayInputModel `json:"mon,omitempty"`
	Sat *WeekDayInputModel `json:"sat,omitempty"`
	Sun *WeekDayInputModel `json:"sun,omitempty"`
	Thu *WeekDayInputModel `json:"thu,omitempty"`
	Tue *WeekDayInputModel `json:"tue,omitempty"`
	Wed *WeekDayInputModel `json:"wed,omitempty"`
}
