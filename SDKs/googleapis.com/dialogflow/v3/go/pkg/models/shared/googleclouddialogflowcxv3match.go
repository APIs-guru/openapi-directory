package shared

type GoogleCloudDialogflowCxV3MatchMatchTypeEnum string

const (
	GoogleCloudDialogflowCxV3MatchMatchTypeEnumMatchTypeUnspecified GoogleCloudDialogflowCxV3MatchMatchTypeEnum = "MATCH_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3MatchMatchTypeEnumIntent               GoogleCloudDialogflowCxV3MatchMatchTypeEnum = "INTENT"
	GoogleCloudDialogflowCxV3MatchMatchTypeEnumDirectIntent         GoogleCloudDialogflowCxV3MatchMatchTypeEnum = "DIRECT_INTENT"
	GoogleCloudDialogflowCxV3MatchMatchTypeEnumParameterFilling     GoogleCloudDialogflowCxV3MatchMatchTypeEnum = "PARAMETER_FILLING"
	GoogleCloudDialogflowCxV3MatchMatchTypeEnumNoMatch              GoogleCloudDialogflowCxV3MatchMatchTypeEnum = "NO_MATCH"
	GoogleCloudDialogflowCxV3MatchMatchTypeEnumNoInput              GoogleCloudDialogflowCxV3MatchMatchTypeEnum = "NO_INPUT"
	GoogleCloudDialogflowCxV3MatchMatchTypeEnumEvent                GoogleCloudDialogflowCxV3MatchMatchTypeEnum = "EVENT"
)

type GoogleCloudDialogflowCxV3Match struct {
	Confidence    *float32                                     `json:"confidence,omitempty"`
	Event         *string                                      `json:"event,omitempty"`
	Intent        *GoogleCloudDialogflowCxV3Intent             `json:"intent,omitempty"`
	MatchType     *GoogleCloudDialogflowCxV3MatchMatchTypeEnum `json:"matchType,omitempty"`
	Parameters    map[string]interface{}                       `json:"parameters,omitempty"`
	ResolvedInput *string                                      `json:"resolvedInput,omitempty"`
}
