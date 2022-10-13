package shared

type GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum string

const (
	GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnumDiffTypeUnspecified GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum = "DIFF_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnumIntent              GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum = "INTENT"
	GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnumPage                GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum = "PAGE"
	GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnumParameters          GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum = "PARAMETERS"
	GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnumUtterance           GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum = "UTTERANCE"
)

type GoogleCloudDialogflowCxV3beta1TestRunDifference struct {
	Description *string                                                  `json:"description"`
	Type        *GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum `json:"type"`
}
