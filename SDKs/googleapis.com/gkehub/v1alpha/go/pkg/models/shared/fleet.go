package shared

type Fleet struct {
	CreateTime  *string              `json:"createTime"`
	DeleteTime  *string              `json:"deleteTime"`
	DisplayName *string              `json:"displayName"`
	Name        *string              `json:"name"`
	State       *FleetLifecycleState `json:"state"`
	UID         *string              `json:"uid"`
	UpdateTime  *string              `json:"updateTime"`
}
