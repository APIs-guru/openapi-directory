package shared

type ResponsePolicy struct {
	Description        *string                    `json:"description"`
	GkeClusters        []ResponsePolicyGkeCluster `json:"gkeClusters"`
	ID                 *string                    `json:"id"`
	Kind               *string                    `json:"kind"`
	Labels             map[string]string          `json:"labels"`
	Networks           []ResponsePolicyNetwork    `json:"networks"`
	ResponsePolicyName *string                    `json:"responsePolicyName"`
}
