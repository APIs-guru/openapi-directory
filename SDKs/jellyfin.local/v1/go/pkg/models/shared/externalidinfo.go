package shared

type ExternalIDInfo struct {
	Key             *string                  `json:"Key,omitempty"`
	Name            *string                  `json:"Name,omitempty"`
	Type            *ExternalIDMediaTypeEnum `json:"Type,omitempty"`
	URLFormatString *string                  `json:"UrlFormatString,omitempty"`
}
