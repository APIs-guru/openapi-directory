package shared

// Project
// A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console. Next tag: 7.
type Project struct {
	ID     *string `json:"id,omitempty"`
	Kind   *string `json:"kind,omitempty"`
	Number *string `json:"number,omitempty"`
	Quota  *Quota  `json:"quota,omitempty"`
}
