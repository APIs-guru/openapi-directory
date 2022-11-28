package shared

// URLInspectionResult
// URL inspection result, including all inspection results.
type URLInspectionResult struct {
	AmpResult             *AmpInspectionResult             `json:"ampResult,omitempty"`
	IndexStatusResult     *IndexStatusInspectionResult     `json:"indexStatusResult,omitempty"`
	InspectionResultLink  *string                          `json:"inspectionResultLink,omitempty"`
	MobileUsabilityResult *MobileUsabilityInspectionResult `json:"mobileUsabilityResult,omitempty"`
	RichResultsResult     *RichResultsInspectionResult     `json:"richResultsResult,omitempty"`
}
