package shared

// APIClassifierOut
// The list of classifiers and versions.
type APIClassifierOut struct {
	ClassifierName        *string `json:"classifierName,omitempty"`
	Learning              *bool   `json:"learning,omitempty"`
	ProbabilityCalibrated *bool   `json:"probabilityCalibrated,omitempty"`
	Serving               *bool   `json:"serving,omitempty"`
	ShuttingDown          *bool   `json:"shuttingDown,omitempty"`
}
