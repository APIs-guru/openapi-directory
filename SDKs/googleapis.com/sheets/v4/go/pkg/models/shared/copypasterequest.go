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

// CopyPasteRequest
// Copies data from the source to the destination.
type CopyPasteRequest struct {
	Destination      *GridRange                            `json:"destination,omitempty"`
	PasteOrientation *CopyPasteRequestPasteOrientationEnum `json:"pasteOrientation,omitempty"`
	PasteType        *CopyPasteRequestPasteTypeEnum        `json:"pasteType,omitempty"`
	Source           *GridRange                            `json:"source,omitempty"`
}
