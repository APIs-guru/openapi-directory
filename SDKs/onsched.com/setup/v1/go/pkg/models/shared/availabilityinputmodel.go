package shared

type AvailabilityInputModel struct {
	Fri *WeekDayInputModel `json:"fri"`
	Mon *WeekDayInputModel `json:"mon"`
	Sat *WeekDayInputModel `json:"sat"`
	Sun *WeekDayInputModel `json:"sun"`
	Thu *WeekDayInputModel `json:"thu"`
	Tue *WeekDayInputModel `json:"tue"`
	Wed *WeekDayInputModel `json:"wed"`
}
