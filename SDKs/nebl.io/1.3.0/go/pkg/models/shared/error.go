package shared

type Error struct {
	Code    *int32  `json:"code"`
	Fields  *string `json:"fields"`
	Message *string `json:"message"`
}
