package shared

type Notifications struct {
	Items []Notification `json:"items"`
	Kind  *string        `json:"kind"`
}
