package shared

type Entity struct {
	ID     *string `json:"id,omitempty"`
	TypeID *string `json:"typeId,omitempty"`
	URL    *string `json:"url,omitempty"`
}
