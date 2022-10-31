package shared

type Notifications struct {
	Items []Notification `json:"items,omitempty"`
	Kind  *string        `json:"kind,omitempty"`
}
