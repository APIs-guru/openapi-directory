package shared

type MemcacheParameters struct {
	ID     *string           `json:"id"`
	Params map[string]string `json:"params"`
}
