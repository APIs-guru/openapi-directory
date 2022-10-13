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

type LintResult struct {
	DebugMessage       *string                 `json:"debugMessage"`
	FieldName          *string                 `json:"fieldName"`
	Level              *LintResultLevelEnum    `json:"level"`
	LocationOffset     *int32                  `json:"locationOffset"`
	Severity           *LintResultSeverityEnum `json:"severity"`
	ValidationUnitName *string                 `json:"validationUnitName"`
}
