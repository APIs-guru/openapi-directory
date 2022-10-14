package shared

type NetworkUnblockResponseForbidden struct {
	Detail   *string `json:"detail,omitempty"`
	Instance *string `json:"instance,omitempty"`
	Title    *string `json:"title,omitempty"`
	Type     *string `json:"type,omitempty"`
}
