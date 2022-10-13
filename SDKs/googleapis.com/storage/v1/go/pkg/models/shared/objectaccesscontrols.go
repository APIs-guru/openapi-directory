package shared

type ObjectAccessControls struct {
	Items []ObjectAccessControl `json:"items"`
	Kind  *string               `json:"kind"`
}
