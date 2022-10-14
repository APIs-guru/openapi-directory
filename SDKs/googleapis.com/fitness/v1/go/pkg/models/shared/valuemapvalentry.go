package shared

type ValueMapValEntry struct {
	Key   *string   `json:"key,omitempty"`
	Value *MapValue `json:"value,omitempty"`
}
