package shared

type Link struct {
	Href     *string `json:"href"`
	Hreflang *string `json:"hreflang"`
	Media    *string `json:"media"`
	Rel      *string `json:"rel"`
	Title    *string `json:"title"`
	Type     *string `json:"type"`
	Value    *string `json:"value"`
}
