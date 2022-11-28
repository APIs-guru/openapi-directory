package shared

// CustomListGroup
// Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other.
type CustomListGroup struct {
	Settings []CustomListTargetingSetting `json:"settings,omitempty"`
}
