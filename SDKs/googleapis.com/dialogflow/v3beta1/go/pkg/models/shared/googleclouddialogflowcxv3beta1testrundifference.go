package shared

type GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum string

const (
	GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnumDiffTypeUnspecified GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum = "DIFF_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnumIntent              GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum = "INTENT"
	GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnumPage                GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum = "PAGE"
	GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnumParameters          GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum = "PARAMETERS"
	GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnumUtterance           GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum = "UTTERANCE"
)

// GoogleCloudDialogflowCxV3beta1TestRunDifference
// The description of differences between original and replayed agent output.
type GoogleCloudDialogflowCxV3beta1TestRunDifference struct {
	Description *string                                                  `json:"description,omitempty"`
	Type        *GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum `json:"type,omitempty"`
}
