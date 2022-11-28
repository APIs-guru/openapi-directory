package shared

// Link
// Links object defined in [section 4.2 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.2).
type Link struct {
	Href     *string `json:"href,omitempty"`
	Hreflang *string `json:"hreflang,omitempty"`
	Media    *string `json:"media,omitempty"`
	Rel      *string `json:"rel,omitempty"`
	Title    *string `json:"title,omitempty"`
	Type     *string `json:"type,omitempty"`
	Value    *string `json:"value,omitempty"`
}
