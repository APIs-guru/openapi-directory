package shared




type TargetChangeTargetChangeTypeEnum string

const (
    TargetChangeTargetChangeTypeEnumNoChange TargetChangeTargetChangeTypeEnum = "NO_CHANGE"
TargetChangeTargetChangeTypeEnumAdd TargetChangeTargetChangeTypeEnum = "ADD"
TargetChangeTargetChangeTypeEnumRemove TargetChangeTargetChangeTypeEnum = "REMOVE"
TargetChangeTargetChangeTypeEnumCurrent TargetChangeTargetChangeTypeEnum = "CURRENT"
TargetChangeTargetChangeTypeEnumReset TargetChangeTargetChangeTypeEnum = "RESET"
)


type TargetChange struct {
    Cause *Status `json:"cause,omitempty"`
    ReadTime *string `json:"readTime,omitempty"`
    ResumeToken *string `json:"resumeToken,omitempty"`
    TargetChangeType *TargetChangeTargetChangeTypeEnum `json:"targetChangeType,omitempty"`
    TargetIds []int32 `json:"targetIds,omitempty"`
    
}

