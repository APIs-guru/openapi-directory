package shared

type CopyPasteRequestPasteOrientationEnum string

const (
	CopyPasteRequestPasteOrientationEnumNormal    CopyPasteRequestPasteOrientationEnum = "NORMAL"
	CopyPasteRequestPasteOrientationEnumTranspose CopyPasteRequestPasteOrientationEnum = "TRANSPOSE"
)

type CopyPasteRequestPasteTypeEnum string

const (
	CopyPasteRequestPasteTypeEnumPasteNormal                CopyPasteRequestPasteTypeEnum = "PASTE_NORMAL"
	CopyPasteRequestPasteTypeEnumPasteValues                CopyPasteRequestPasteTypeEnum = "PASTE_VALUES"
	CopyPasteRequestPasteTypeEnumPasteFormat                CopyPasteRequestPasteTypeEnum = "PASTE_FORMAT"
	CopyPasteRequestPasteTypeEnumPasteNoBorders             CopyPasteRequestPasteTypeEnum = "PASTE_NO_BORDERS"
	CopyPasteRequestPasteTypeEnumPasteFormula               CopyPasteRequestPasteTypeEnum = "PASTE_FORMULA"
	CopyPasteRequestPasteTypeEnumPasteDataValidation        CopyPasteRequestPasteTypeEnum = "PASTE_DATA_VALIDATION"
	CopyPasteRequestPasteTypeEnumPasteConditionalFormatting CopyPasteRequestPasteTypeEnum = "PASTE_CONDITIONAL_FORMATTING"
)

type CopyPasteRequest struct {
	Destination      *GridRange                            `json:"destination"`
	PasteOrientation *CopyPasteRequestPasteOrientationEnum `json:"pasteOrientation"`
	PasteType        *CopyPasteRequestPasteTypeEnum        `json:"pasteType"`
	Source           *GridRange                            `json:"source"`
}
