package shared

type GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig struct {
	AccessLevels          []string                                                   `json:"accessLevels"`
	EgressPolicies        []GoogleIdentityAccesscontextmanagerV1EgressPolicy         `json:"egressPolicies"`
	IngressPolicies       []GoogleIdentityAccesscontextmanagerV1IngressPolicy        `json:"ingressPolicies"`
	Resources             []string                                                   `json:"resources"`
	RestrictedServices    []string                                                   `json:"restrictedServices"`
	VpcAccessibleServices *GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices `json:"vpcAccessibleServices"`
}
