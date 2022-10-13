package shared

type PasteDataRequestTypeEnum string

const (
	PasteDataRequestTypeEnumPasteNormal                PasteDataRequestTypeEnum = "PASTE_NORMAL"
	PasteDataRequestTypeEnumPasteValues                PasteDataRequestTypeEnum = "PASTE_VALUES"
	PasteDataRequestTypeEnumPasteFormat                PasteDataRequestTypeEnum = "PASTE_FORMAT"
	PasteDataRequestTypeEnumPasteNoBorders             PasteDataRequestTypeEnum = "PASTE_NO_BORDERS"
	PasteDataRequestTypeEnumPasteFormula               PasteDataRequestTypeEnum = "PASTE_FORMULA"
	PasteDataRequestTypeEnumPasteDataValidation        PasteDataRequestTypeEnum = "PASTE_DATA_VALIDATION"
	PasteDataRequestTypeEnumPasteConditionalFormatting PasteDataRequestTypeEnum = "PASTE_CONDITIONAL_FORMATTING"
)

type PasteDataRequest struct {
	Coordinate *GridCoordinate           `json:"coordinate"`
	Data       *string                   `json:"data"`
	Delimiter  *string                   `json:"delimiter"`
	HTML       *bool                     `json:"html"`
	Type       *PasteDataRequestTypeEnum `json:"type"`
}
