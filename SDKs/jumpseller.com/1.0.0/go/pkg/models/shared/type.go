package shared

type Type struct {
	Code  *string     `json:"code,omitempty"`
	Stats *StoreStats `json:"stats,omitempty"`
}
