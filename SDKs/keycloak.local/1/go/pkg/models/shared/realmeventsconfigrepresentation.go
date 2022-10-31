package shared

type RealmEventsConfigRepresentation struct {
	AdminEventsDetailsEnabled *bool    `json:"adminEventsDetailsEnabled,omitempty"`
	AdminEventsEnabled        *bool    `json:"adminEventsEnabled,omitempty"`
	EnabledEventTypes         []string `json:"enabledEventTypes,omitempty"`
	EventsEnabled             *bool    `json:"eventsEnabled,omitempty"`
	EventsExpiration          *int64   `json:"eventsExpiration,omitempty"`
	EventsListeners           []string `json:"eventsListeners,omitempty"`
}
