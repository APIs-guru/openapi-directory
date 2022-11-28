package shared

// GooglePrivacyDlpV2KMapEstimationConfig
// Reidentifiability metric. This corresponds to a risk model similar to what is called "journalist risk" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset.
type GooglePrivacyDlpV2KMapEstimationConfig struct {
	AuxiliaryTables []GooglePrivacyDlpV2AuxiliaryTable `json:"auxiliaryTables,omitempty"`
	QuasiIds        []GooglePrivacyDlpV2TaggedField    `json:"quasiIds,omitempty"`
	RegionCode      *string                            `json:"regionCode,omitempty"`
}
