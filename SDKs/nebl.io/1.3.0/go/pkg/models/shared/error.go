package shared

type Error struct {
	Code    *int32  `json:"code,omitempty"`
	Fields  *string `json:"fields,omitempty"`
	Message *string `json:"message,omitempty"`
}
