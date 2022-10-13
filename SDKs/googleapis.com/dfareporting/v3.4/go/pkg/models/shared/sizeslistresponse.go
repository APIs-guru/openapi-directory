package shared

type SizesListResponse struct {
	Kind  *string `json:"kind"`
	Sizes []Size  `json:"sizes"`
}
