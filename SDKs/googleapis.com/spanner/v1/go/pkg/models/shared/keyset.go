package shared

type KeySet struct {
	All    *bool           `json:"all"`
	Keys   [][]interface{} `json:"keys"`
	Ranges []KeyRange      `json:"ranges"`
}
