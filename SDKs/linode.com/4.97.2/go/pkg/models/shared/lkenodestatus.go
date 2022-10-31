package shared




type LkeNodeStatusStatusEnum string

const (
    LkeNodeStatusStatusEnumReady LkeNodeStatusStatusEnum = "ready"
LkeNodeStatusStatusEnumNotReady LkeNodeStatusStatusEnum = "not_ready"
)


type LkeNodeStatus struct {
    ID *string `json:"id,omitempty"`
    InstanceID *string `json:"instance_id,omitempty"`
    Status *LkeNodeStatusStatusEnum `json:"status,omitempty"`
    
}

