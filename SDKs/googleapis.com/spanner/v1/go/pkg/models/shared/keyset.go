package shared

type KeySet struct {
	All    *bool           `json:"all,omitempty"`
	Keys   [][]interface{} `json:"keys,omitempty"`
	Ranges []KeyRange      `json:"ranges,omitempty"`
}
