package shared

// Trigger
// A representation of the trigger resource.
type Trigger struct {
	Channel        *string                   `json:"channel,omitempty"`
	Conditions     map[string]StateCondition `json:"conditions,omitempty"`
	CreateTime     *string                   `json:"createTime,omitempty"`
	Destination    *Destination              `json:"destination,omitempty"`
	Etag           *string                   `json:"etag,omitempty"`
	EventFilters   []EventFilter             `json:"eventFilters,omitempty"`
	Labels         map[string]string         `json:"labels,omitempty"`
	Name           *string                   `json:"name,omitempty"`
	ServiceAccount *string                   `json:"serviceAccount,omitempty"`
	Transport      *Transport                `json:"transport,omitempty"`
	UID            *string                   `json:"uid,omitempty"`
	UpdateTime     *string                   `json:"updateTime,omitempty"`
}

// TriggerInput
// A representation of the trigger resource.
type TriggerInput struct {
	Channel        *string           `json:"channel,omitempty"`
	Destination    *Destination      `json:"destination,omitempty"`
	EventFilters   []EventFilter     `json:"eventFilters,omitempty"`
	Labels         map[string]string `json:"labels,omitempty"`
	Name           *string           `json:"name,omitempty"`
	ServiceAccount *string           `json:"serviceAccount,omitempty"`
	Transport      *TransportInput   `json:"transport,omitempty"`
}
