package shared

type Volumes struct {
	Items      []Volume `json:"items"`
	Kind       *string  `json:"kind"`
	TotalItems *int32   `json:"totalItems"`
}
