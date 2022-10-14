package shared

type ValueCount struct {
	Count *int32       `json:"count,omitempty"`
	Value *interface{} `json:"value,omitempty"`
}
