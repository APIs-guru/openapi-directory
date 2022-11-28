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

// PasteDataRequest
// Inserts data into the spreadsheet starting at the specified coordinate.
type PasteDataRequest struct {
	Coordinate *GridCoordinate           `json:"coordinate,omitempty"`
	Data       *string                   `json:"data,omitempty"`
	Delimiter  *string                   `json:"delimiter,omitempty"`
	HTML       *bool                     `json:"html,omitempty"`
	Type       *PasteDataRequestTypeEnum `json:"type,omitempty"`
}
