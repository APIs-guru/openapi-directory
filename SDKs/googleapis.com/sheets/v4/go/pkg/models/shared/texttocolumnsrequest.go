package shared

type TextToColumnsRequestDelimiterTypeEnum string

const (
	TextToColumnsRequestDelimiterTypeEnumDelimiterTypeUnspecified TextToColumnsRequestDelimiterTypeEnum = "DELIMITER_TYPE_UNSPECIFIED"
	TextToColumnsRequestDelimiterTypeEnumComma                    TextToColumnsRequestDelimiterTypeEnum = "COMMA"
	TextToColumnsRequestDelimiterTypeEnumSemicolon                TextToColumnsRequestDelimiterTypeEnum = "SEMICOLON"
	TextToColumnsRequestDelimiterTypeEnumPeriod                   TextToColumnsRequestDelimiterTypeEnum = "PERIOD"
	TextToColumnsRequestDelimiterTypeEnumSpace                    TextToColumnsRequestDelimiterTypeEnum = "SPACE"
	TextToColumnsRequestDelimiterTypeEnumCustom                   TextToColumnsRequestDelimiterTypeEnum = "CUSTOM"
	TextToColumnsRequestDelimiterTypeEnumAutodetect               TextToColumnsRequestDelimiterTypeEnum = "AUTODETECT"
)

type TextToColumnsRequest struct {
	Delimiter     *string                                `json:"delimiter"`
	DelimiterType *TextToColumnsRequestDelimiterTypeEnum `json:"delimiterType"`
	Source        *GridRange                             `json:"source"`
}
