package shared

// GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig
// `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
type GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig struct {
	AccessLevels          []string                                                   `json:"accessLevels,omitempty"`
	EgressPolicies        []GoogleIdentityAccesscontextmanagerV1EgressPolicy         `json:"egressPolicies,omitempty"`
	IngressPolicies       []GoogleIdentityAccesscontextmanagerV1IngressPolicy        `json:"ingressPolicies,omitempty"`
	Resources             []string                                                   `json:"resources,omitempty"`
	RestrictedServices    []string                                                   `json:"restrictedServices,omitempty"`
	VpcAccessibleServices *GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices `json:"vpcAccessibleServices,omitempty"`
}
