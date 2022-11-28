package shared

// CustomList
// Describes a custom list entity, such as a custom affinity or custom intent audience list.
type CustomList struct {
	CustomListID *string `json:"customListId,omitempty"`
	DisplayName  *string `json:"displayName,omitempty"`
	Name         *string `json:"name,omitempty"`
}
