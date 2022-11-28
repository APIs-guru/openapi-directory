package shared

// GoogleCloudMlV1TrialParameter
// A message representing a parameter to be tuned. Contains the name of the parameter and the suggested value to use for this trial.
type GoogleCloudMlV1TrialParameter struct {
	FloatValue  *float64 `json:"floatValue,omitempty"`
	IntValue    *string  `json:"intValue,omitempty"`
	Parameter   *string  `json:"parameter,omitempty"`
	StringValue *string  `json:"stringValue,omitempty"`
}
