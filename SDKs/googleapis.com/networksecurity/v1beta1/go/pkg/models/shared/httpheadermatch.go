package shared

type HTTPHeaderMatch struct {
	HeaderName *string `json:"headerName"`
	RegexMatch *string `json:"regexMatch"`
}
