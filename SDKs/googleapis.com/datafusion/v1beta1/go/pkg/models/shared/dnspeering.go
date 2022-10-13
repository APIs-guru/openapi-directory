package shared

type DNSPeering struct {
	Description   *string `json:"description"`
	Domain        *string `json:"domain"`
	Name          *string `json:"name"`
	TargetNetwork *string `json:"targetNetwork"`
	TargetProject *string `json:"targetProject"`
}
