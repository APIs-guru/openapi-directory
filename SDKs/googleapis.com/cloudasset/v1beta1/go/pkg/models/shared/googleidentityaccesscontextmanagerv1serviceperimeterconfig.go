package shared



type GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig struct {
    AccessLevels []string `json:"accessLevels,omitempty"`
    EgressPolicies []GoogleIdentityAccesscontextmanagerV1EgressPolicy `json:"egressPolicies,omitempty"`
    IngressPolicies []GoogleIdentityAccesscontextmanagerV1IngressPolicy `json:"ingressPolicies,omitempty"`
    Resources []string `json:"resources,omitempty"`
    RestrictedServices []string `json:"restrictedServices,omitempty"`
    VpcAccessibleServices *GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices `json:"vpcAccessibleServices,omitempty"`
    
}

