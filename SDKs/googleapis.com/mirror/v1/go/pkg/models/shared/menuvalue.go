package shared

type MenuValue struct {
	DisplayName *string `json:"displayName,omitempty"`
	IconURL     *string `json:"iconUrl,omitempty"`
	State       *string `json:"state,omitempty"`
}
