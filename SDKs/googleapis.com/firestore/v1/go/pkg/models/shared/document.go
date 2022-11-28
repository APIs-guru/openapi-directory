package shared

// Document
// A Firestore document. Must not exceed 1 MiB - 4 bytes.
type Document struct {
	CreateTime *string          `json:"createTime,omitempty"`
	Fields     map[string]Value `json:"fields,omitempty"`
	Name       *string          `json:"name,omitempty"`
	UpdateTime *string          `json:"updateTime,omitempty"`
}
