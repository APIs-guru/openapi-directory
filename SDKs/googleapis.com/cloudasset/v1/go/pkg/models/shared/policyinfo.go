package shared

type PolicyInfo struct {
	AttachedResource *string `json:"attachedResource"`
	Policy           *Policy `json:"policy"`
}
