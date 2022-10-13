package shared

type EffectiveIamPolicy struct {
	FullResourceName *string      `json:"fullResourceName"`
	Policies         []PolicyInfo `json:"policies"`
}
