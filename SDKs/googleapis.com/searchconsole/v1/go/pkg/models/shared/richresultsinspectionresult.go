package shared




type RichResultsInspectionResultVerdictEnum string

const (
    RichResultsInspectionResultVerdictEnumVerdictUnspecified RichResultsInspectionResultVerdictEnum = "VERDICT_UNSPECIFIED"
RichResultsInspectionResultVerdictEnumPass RichResultsInspectionResultVerdictEnum = "PASS"
RichResultsInspectionResultVerdictEnumPartial RichResultsInspectionResultVerdictEnum = "PARTIAL"
RichResultsInspectionResultVerdictEnumFail RichResultsInspectionResultVerdictEnum = "FAIL"
RichResultsInspectionResultVerdictEnumNeutral RichResultsInspectionResultVerdictEnum = "NEUTRAL"
)


type RichResultsInspectionResult struct {
    DetectedItems []DetectedItems `json:"detectedItems,omitempty"`
    Verdict *RichResultsInspectionResultVerdictEnum `json:"verdict,omitempty"`
    
}

