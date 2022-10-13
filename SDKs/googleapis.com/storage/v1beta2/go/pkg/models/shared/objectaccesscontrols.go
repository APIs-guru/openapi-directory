package shared

type ObjectAccessControls struct {
	Items []interface{} `json:"items"`
	Kind  *string       `json:"kind"`
}
