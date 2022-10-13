package shared

type Comment struct {
	Body          *string `json:"body"`
	CreateTime    *string `json:"createTime"`
	Creator       *Actor  `json:"creator"`
	Name          *string `json:"name"`
	PlainTextBody *string `json:"plainTextBody"`
}
