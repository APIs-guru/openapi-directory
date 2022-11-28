package shared

// Notifications
// A list of notification subscriptions.
type Notifications struct {
	Items []Notification `json:"items,omitempty"`
	Kind  *string        `json:"kind,omitempty"`
}
