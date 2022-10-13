package shared

type GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum string

const (
	GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnumMatchTypeUnspecified GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum = "MATCH_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnumIntent               GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum = "INTENT"
	GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnumDirectIntent         GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum = "DIRECT_INTENT"
	GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnumParameterFilling     GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum = "PARAMETER_FILLING"
	GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnumNoMatch              GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum = "NO_MATCH"
	GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnumNoInput              GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum = "NO_INPUT"
	GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnumEvent                GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum = "EVENT"
)

type GoogleCloudDialogflowCxV3beta1Match struct {
	Confidence    *float32                                          `json:"confidence"`
	Event         *string                                           `json:"event"`
	Intent        *GoogleCloudDialogflowCxV3beta1Intent             `json:"intent"`
	MatchType     *GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum `json:"matchType"`
	Parameters    map[string]interface{}                            `json:"parameters"`
	ResolvedInput *string                                           `json:"resolvedInput"`
}
