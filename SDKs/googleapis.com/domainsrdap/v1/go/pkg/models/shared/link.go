package shared

type Link struct {
	Href     *string `json:"href,omitempty"`
	Hreflang *string `json:"hreflang,omitempty"`
	Media    *string `json:"media,omitempty"`
	Rel      *string `json:"rel,omitempty"`
	Title    *string `json:"title,omitempty"`
	Type     *string `json:"type,omitempty"`
	Value    *string `json:"value,omitempty"`
}
