package shared

type Comment struct {
	Body          *string `json:"body,omitempty"`
	CreateTime    *string `json:"createTime,omitempty"`
	Creator       *Actor  `json:"creator,omitempty"`
	Name          *string `json:"name,omitempty"`
	PlainTextBody *string `json:"plainTextBody,omitempty"`
}
