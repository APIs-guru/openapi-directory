package shared

type TargetChangeTargetChangeTypeEnum string

const (
	TargetChangeTargetChangeTypeEnumNoChange TargetChangeTargetChangeTypeEnum = "NO_CHANGE"
	TargetChangeTargetChangeTypeEnumAdd      TargetChangeTargetChangeTypeEnum = "ADD"
	TargetChangeTargetChangeTypeEnumRemove   TargetChangeTargetChangeTypeEnum = "REMOVE"
	TargetChangeTargetChangeTypeEnumCurrent  TargetChangeTargetChangeTypeEnum = "CURRENT"
	TargetChangeTargetChangeTypeEnumReset    TargetChangeTargetChangeTypeEnum = "RESET"
)

type TargetChange struct {
	Cause            *Status                           `json:"cause"`
	ReadTime         *string                           `json:"readTime"`
	ResumeToken      *string                           `json:"resumeToken"`
	TargetChangeType *TargetChangeTargetChangeTypeEnum `json:"targetChangeType"`
	TargetIds        []int32                           `json:"targetIds"`
}
