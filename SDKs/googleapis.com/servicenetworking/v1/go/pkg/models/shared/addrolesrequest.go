package shared



type AddRolesRequest struct {
    ConsumerNetwork *string `json:"consumerNetwork,omitempty"`
    PolicyBinding []PolicyBinding `json:"policyBinding,omitempty"`
    
}

