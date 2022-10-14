package shared

type FlagsListResponse struct {
	Items []Flag  `json:"items,omitempty"`
	Kind  *string `json:"kind,omitempty"`
}
