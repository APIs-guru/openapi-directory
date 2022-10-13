package shared

type FlagsListResponse struct {
	Items []Flag  `json:"items"`
	Kind  *string `json:"kind"`
}
