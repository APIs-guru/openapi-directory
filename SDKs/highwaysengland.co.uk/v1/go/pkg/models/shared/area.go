package shared

type Area struct {
	Description string  `json:"Description"`
	ID          *string `json:"Id"`
	Name        string  `json:"Name"`
	XLatitude   string  `json:"XLatitude"`
	XLongitude  string  `json:"XLongitude"`
	YLatitude   string  `json:"YLatitude"`
	YLongitude  string  `json:"YLongitude"`
}
