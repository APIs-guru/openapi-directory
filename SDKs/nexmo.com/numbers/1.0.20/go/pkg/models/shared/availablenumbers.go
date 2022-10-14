package shared

type AvailableNumbers struct {
	Count   *int64            `json:"count,omitempty"`
	Numbers []Availablenumber `json:"numbers,omitempty"`
}
