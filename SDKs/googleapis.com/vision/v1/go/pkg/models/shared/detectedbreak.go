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

type DetectedBreak struct {
	IsPrefix *bool                  `json:"isPrefix"`
	Type     *DetectedBreakTypeEnum `json:"type"`
}
