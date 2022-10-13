package shared

type LkeNodeStatusStatusEnum string

const (
	LkeNodeStatusStatusEnumReady    LkeNodeStatusStatusEnum = "ready"
	LkeNodeStatusStatusEnumNotReady LkeNodeStatusStatusEnum = "not_ready"
)

type LkeNodeStatus struct {
	ID         *string                  `json:"id"`
	InstanceID *string                  `json:"instance_id"`
	Status     *LkeNodeStatusStatusEnum `json:"status"`
}
