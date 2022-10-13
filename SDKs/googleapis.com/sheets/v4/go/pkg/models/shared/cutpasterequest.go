package shared

type CutPasteRequestPasteTypeEnum string

const (
	CutPasteRequestPasteTypeEnumPasteNormal                CutPasteRequestPasteTypeEnum = "PASTE_NORMAL"
	CutPasteRequestPasteTypeEnumPasteValues                CutPasteRequestPasteTypeEnum = "PASTE_VALUES"
	CutPasteRequestPasteTypeEnumPasteFormat                CutPasteRequestPasteTypeEnum = "PASTE_FORMAT"
	CutPasteRequestPasteTypeEnumPasteNoBorders             CutPasteRequestPasteTypeEnum = "PASTE_NO_BORDERS"
	CutPasteRequestPasteTypeEnumPasteFormula               CutPasteRequestPasteTypeEnum = "PASTE_FORMULA"
	CutPasteRequestPasteTypeEnumPasteDataValidation        CutPasteRequestPasteTypeEnum = "PASTE_DATA_VALIDATION"
	CutPasteRequestPasteTypeEnumPasteConditionalFormatting CutPasteRequestPasteTypeEnum = "PASTE_CONDITIONAL_FORMATTING"
)

type CutPasteRequest struct {
	Destination *GridCoordinate               `json:"destination"`
	PasteType   *CutPasteRequestPasteTypeEnum `json:"pasteType"`
	Source      *GridRange                    `json:"source"`
}
