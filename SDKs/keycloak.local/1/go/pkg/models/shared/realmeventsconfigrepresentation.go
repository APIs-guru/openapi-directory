package shared

type RealmEventsConfigRepresentation struct {
	AdminEventsDetailsEnabled *bool    `json:"adminEventsDetailsEnabled"`
	AdminEventsEnabled        *bool    `json:"adminEventsEnabled"`
	EnabledEventTypes         []string `json:"enabledEventTypes"`
	EventsEnabled             *bool    `json:"eventsEnabled"`
	EventsExpiration          *int64   `json:"eventsExpiration"`
	EventsListeners           []string `json:"eventsListeners"`
}
