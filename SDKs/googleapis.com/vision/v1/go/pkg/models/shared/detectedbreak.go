package shared

type DetectedBreakTypeEnum string

const (
	DetectedBreakTypeEnumUnknown      DetectedBreakTypeEnum = "UNKNOWN"
	DetectedBreakTypeEnumSpace        DetectedBreakTypeEnum = "SPACE"
	DetectedBreakTypeEnumSureSpace    DetectedBreakTypeEnum = "SURE_SPACE"
	DetectedBreakTypeEnumEolSureSpace DetectedBreakTypeEnum = "EOL_SURE_SPACE"
	DetectedBreakTypeEnumHyphen       DetectedBreakTypeEnum = "HYPHEN"
	DetectedBreakTypeEnumLineBreak    DetectedBreakTypeEnum = "LINE_BREAK"
)

// DetectedBreak
// Detected start or end of a structural component.
type DetectedBreak struct {
	IsPrefix *bool                  `json:"isPrefix,omitempty"`
	Type     *DetectedBreakTypeEnum `json:"type,omitempty"`
}
