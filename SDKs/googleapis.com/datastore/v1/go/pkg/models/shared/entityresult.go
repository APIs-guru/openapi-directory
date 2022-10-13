package shared

type EntityResult struct {
	Cursor     *string `json:"cursor"`
	Entity     *Entity `json:"entity"`
	UpdateTime *string `json:"updateTime"`
	Version    *string `json:"version"`
}
