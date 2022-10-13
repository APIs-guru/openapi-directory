package shared

type MultivaluedHashMap struct {
	Empty      *bool    `json:"empty"`
	LoadFactor *float32 `json:"loadFactor"`
	Threshold  *int32   `json:"threshold"`
}
