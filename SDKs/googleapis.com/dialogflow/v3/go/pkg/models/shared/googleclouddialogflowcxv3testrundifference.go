package shared

type GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum string

const (
	GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnumDiffTypeUnspecified GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum = "DIFF_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnumIntent              GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum = "INTENT"
	GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnumPage                GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum = "PAGE"
	GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnumParameters          GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum = "PARAMETERS"
	GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnumUtterance           GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum = "UTTERANCE"
)

type GoogleCloudDialogflowCxV3TestRunDifference struct {
	Description *string                                             `json:"description,omitempty"`
	Type        *GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum `json:"type,omitempty"`
}
