package shared

// ResponsePolicy
// A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.
type ResponsePolicy struct {
	Description        *string                    `json:"description,omitempty"`
	GkeClusters        []ResponsePolicyGkeCluster `json:"gkeClusters,omitempty"`
	ID                 *string                    `json:"id,omitempty"`
	Kind               *string                    `json:"kind,omitempty"`
	Labels             map[string]string          `json:"labels,omitempty"`
	Networks           []ResponsePolicyNetwork    `json:"networks,omitempty"`
	ResponsePolicyName *string                    `json:"responsePolicyName,omitempty"`
}
