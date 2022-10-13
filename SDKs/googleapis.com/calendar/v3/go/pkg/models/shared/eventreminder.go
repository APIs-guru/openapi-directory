package shared

type EventReminder struct {
	Method  *string `json:"method"`
	Minutes *int32  `json:"minutes"`
}
