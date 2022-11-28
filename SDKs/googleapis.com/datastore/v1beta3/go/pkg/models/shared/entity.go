package shared

// Entity
// A Datastore data object. An entity is limited to 1 megabyte when stored. That _roughly_ corresponds to a limit of 1 megabyte for the serialized form of this message.
type Entity struct {
	Key        *Key             `json:"key,omitempty"`
	Properties map[string]Value `json:"properties,omitempty"`
}
