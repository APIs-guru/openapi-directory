package shared

type ExternalIDInfo struct {
	Key             *string                  `json:"Key"`
	Name            *string                  `json:"Name"`
	Type            *ExternalIDMediaTypeEnum `json:"Type"`
	URLFormatString *string                  `json:"UrlFormatString"`
}
