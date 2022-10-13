package shared

type AvailableNumbers struct {
	Count   *int64            `json:"count"`
	Numbers []Availablenumber `json:"numbers"`
}
