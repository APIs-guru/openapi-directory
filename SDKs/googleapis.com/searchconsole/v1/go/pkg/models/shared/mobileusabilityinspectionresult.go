package shared




type MobileUsabilityInspectionResultVerdictEnum string

const (
    MobileUsabilityInspectionResultVerdictEnumVerdictUnspecified MobileUsabilityInspectionResultVerdictEnum = "VERDICT_UNSPECIFIED"
MobileUsabilityInspectionResultVerdictEnumPass MobileUsabilityInspectionResultVerdictEnum = "PASS"
MobileUsabilityInspectionResultVerdictEnumPartial MobileUsabilityInspectionResultVerdictEnum = "PARTIAL"
MobileUsabilityInspectionResultVerdictEnumFail MobileUsabilityInspectionResultVerdictEnum = "FAIL"
MobileUsabilityInspectionResultVerdictEnumNeutral MobileUsabilityInspectionResultVerdictEnum = "NEUTRAL"
)


type MobileUsabilityInspectionResult struct {
    Issues []MobileUsabilityIssue `json:"issues,omitempty"`
    Verdict *MobileUsabilityInspectionResultVerdictEnum `json:"verdict,omitempty"`
    
}

