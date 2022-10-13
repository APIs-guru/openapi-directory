package shared

type URLInspectionResult struct {
	AmpResult             *AmpInspectionResult             `json:"ampResult"`
	IndexStatusResult     *IndexStatusInspectionResult     `json:"indexStatusResult"`
	InspectionResultLink  *string                          `json:"inspectionResultLink"`
	MobileUsabilityResult *MobileUsabilityInspectionResult `json:"mobileUsabilityResult"`
	RichResultsResult     *RichResultsInspectionResult     `json:"richResultsResult"`
}
