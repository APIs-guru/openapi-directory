package shared

// TeardownTag
// Represents a tag that fires after another tag in order to tear down dependencies.
type TeardownTag struct {
	StopTeardownOnFailure *bool   `json:"stopTeardownOnFailure,omitempty"`
	TagName               *string `json:"tagName,omitempty"`
}
