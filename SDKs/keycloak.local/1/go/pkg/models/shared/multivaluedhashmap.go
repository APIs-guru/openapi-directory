package shared

type MultivaluedHashMap struct {
	Empty      *bool    `json:"empty,omitempty"`
	LoadFactor *float32 `json:"loadFactor,omitempty"`
	Threshold  *int32   `json:"threshold,omitempty"`
}
