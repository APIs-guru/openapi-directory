package shared

type RichResultsInspectionResultVerdictEnum string

const (
	RichResultsInspectionResultVerdictEnumVerdictUnspecified RichResultsInspectionResultVerdictEnum = "VERDICT_UNSPECIFIED"
	RichResultsInspectionResultVerdictEnumPass               RichResultsInspectionResultVerdictEnum = "PASS"
	RichResultsInspectionResultVerdictEnumPartial            RichResultsInspectionResultVerdictEnum = "PARTIAL"
	RichResultsInspectionResultVerdictEnumFail               RichResultsInspectionResultVerdictEnum = "FAIL"
	RichResultsInspectionResultVerdictEnumNeutral            RichResultsInspectionResultVerdictEnum = "NEUTRAL"
)

// RichResultsInspectionResult
// Rich-Results inspection result, including any rich results found at this URL.
type RichResultsInspectionResult struct {
	DetectedItems []DetectedItems                         `json:"detectedItems,omitempty"`
	Verdict       *RichResultsInspectionResultVerdictEnum `json:"verdict,omitempty"`
}
