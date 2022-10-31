package shared

type AutofitAutofitTypeEnum string

const (
	AutofitAutofitTypeEnumAutofitTypeUnspecified AutofitAutofitTypeEnum = "AUTOFIT_TYPE_UNSPECIFIED"
	AutofitAutofitTypeEnumNone                   AutofitAutofitTypeEnum = "NONE"
	AutofitAutofitTypeEnumTextAutofit            AutofitAutofitTypeEnum = "TEXT_AUTOFIT"
	AutofitAutofitTypeEnumShapeAutofit           AutofitAutofitTypeEnum = "SHAPE_AUTOFIT"
)

type Autofit struct {
	AutofitType          *AutofitAutofitTypeEnum `json:"autofitType,omitempty"`
	FontScale            *float32                `json:"fontScale,omitempty"`
	LineSpacingReduction *float32                `json:"lineSpacingReduction,omitempty"`
}
