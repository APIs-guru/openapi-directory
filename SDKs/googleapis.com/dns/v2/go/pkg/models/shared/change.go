package shared




type ChangeStatusEnum string

const (
    ChangeStatusEnumPending ChangeStatusEnum = "PENDING"
ChangeStatusEnumDone ChangeStatusEnum = "DONE"
)


type Change struct {
    Additions []ResourceRecordSet `json:"additions,omitempty"`
    Deletions []ResourceRecordSet `json:"deletions,omitempty"`
    ID *string `json:"id,omitempty"`
    IsServing *bool `json:"isServing,omitempty"`
    Kind *string `json:"kind,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    Status *ChangeStatusEnum `json:"status,omitempty"`
    
}

