package shared

type APIClassifierOut struct {
	ClassifierName        *string `json:"classifierName"`
	Learning              *bool   `json:"learning"`
	ProbabilityCalibrated *bool   `json:"probabilityCalibrated"`
	Serving               *bool   `json:"serving"`
	ShuttingDown          *bool   `json:"shuttingDown"`
}
