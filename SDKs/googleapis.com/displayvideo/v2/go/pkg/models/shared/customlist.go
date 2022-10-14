package shared

type CustomList struct {
	CustomListID *string `json:"customListId,omitempty"`
	DisplayName  *string `json:"displayName,omitempty"`
	Name         *string `json:"name,omitempty"`
}
