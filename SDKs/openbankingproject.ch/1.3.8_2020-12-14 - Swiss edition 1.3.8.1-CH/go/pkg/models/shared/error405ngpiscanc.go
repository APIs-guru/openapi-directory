package shared

type Error405NgPisCanc struct {
	Links       map[string]HrefType    `json:"_links"`
	TppMessages []TppMessage405PisCanc `json:"tppMessages"`
}
