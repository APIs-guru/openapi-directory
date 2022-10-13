package shared

type AutofitAutofitTypeEnum string

const (
	AutofitAutofitTypeEnumAutofitTypeUnspecified AutofitAutofitTypeEnum = "AUTOFIT_TYPE_UNSPECIFIED"
	AutofitAutofitTypeEnumNone                   AutofitAutofitTypeEnum = "NONE"
	AutofitAutofitTypeEnumTextAutofit            AutofitAutofitTypeEnum = "TEXT_AUTOFIT"
	AutofitAutofitTypeEnumShapeAutofit           AutofitAutofitTypeEnum = "SHAPE_AUTOFIT"
)

type Autofit struct {
	AutofitType          *AutofitAutofitTypeEnum `json:"autofitType"`
	FontScale            *float32                `json:"fontScale"`
	LineSpacingReduction *float32                `json:"lineSpacingReduction"`
}
