package shared

type TeardownTag struct {
	StopTeardownOnFailure *bool   `json:"stopTeardownOnFailure"`
	TagName               *string `json:"tagName"`
}
