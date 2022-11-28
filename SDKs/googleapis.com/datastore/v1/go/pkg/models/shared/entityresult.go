package shared

// EntityResult
// The result of fetching an entity from Datastore.
type EntityResult struct {
	Cursor     *string `json:"cursor,omitempty"`
	Entity     *Entity `json:"entity,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
	Version    *string `json:"version,omitempty"`
}
