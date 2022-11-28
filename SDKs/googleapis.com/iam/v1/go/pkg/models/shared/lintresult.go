package shared

type LintResultLevelEnum string

const (
	LintResultLevelEnumLevelUnspecified LintResultLevelEnum = "LEVEL_UNSPECIFIED"
	LintResultLevelEnumCondition        LintResultLevelEnum = "CONDITION"
)

type LintResultSeverityEnum string

const (
	LintResultSeverityEnumSeverityUnspecified LintResultSeverityEnum = "SEVERITY_UNSPECIFIED"
	LintResultSeverityEnumError               LintResultSeverityEnum = "ERROR"
	LintResultSeverityEnumWarning             LintResultSeverityEnum = "WARNING"
	LintResultSeverityEnumNotice              LintResultSeverityEnum = "NOTICE"
	LintResultSeverityEnumInfo                LintResultSeverityEnum = "INFO"
	LintResultSeverityEnumDeprecated          LintResultSeverityEnum = "DEPRECATED"
)

// LintResult
// Structured response of a single validation unit.
type LintResult struct {
	DebugMessage       *string                 `json:"debugMessage,omitempty"`
	FieldName          *string                 `json:"fieldName,omitempty"`
	Level              *LintResultLevelEnum    `json:"level,omitempty"`
	LocationOffset     *int32                  `json:"locationOffset,omitempty"`
	Severity           *LintResultSeverityEnum `json:"severity,omitempty"`
	ValidationUnitName *string                 `json:"validationUnitName,omitempty"`
}
