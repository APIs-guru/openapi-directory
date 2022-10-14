package shared

type TeardownTag struct {
	StopTeardownOnFailure *bool   `json:"stopTeardownOnFailure,omitempty"`
	TagName               *string `json:"tagName,omitempty"`
}
