package shared

type BusinessHoursUpdateModel struct {
	Fri *BusinessHourInputModel `json:"fri"`
	Mon *BusinessHourInputModel `json:"mon"`
	Sat *BusinessHourInputModel `json:"sat"`
	Sun *BusinessHourInputModel `json:"sun"`
	Thu *BusinessHourInputModel `json:"thu"`
	Tue *BusinessHourInputModel `json:"tue"`
	Wed *BusinessHourInputModel `json:"wed"`
}
