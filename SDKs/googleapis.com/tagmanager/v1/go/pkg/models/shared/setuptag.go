package shared

type SetupTag struct {
	StopOnSetupFailure *bool   `json:"stopOnSetupFailure"`
	TagName            *string `json:"tagName"`
}
