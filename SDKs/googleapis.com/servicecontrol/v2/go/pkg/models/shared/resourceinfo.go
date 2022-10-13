package shared

type ResourceInfo struct {
	Container  *string `json:"container"`
	Location   *string `json:"location"`
	Name       *string `json:"name"`
	Permission *string `json:"permission"`
	Type       *string `json:"type"`
}
