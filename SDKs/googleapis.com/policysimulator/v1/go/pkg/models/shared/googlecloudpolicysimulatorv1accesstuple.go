package shared

// GoogleCloudPolicysimulatorV1AccessTuple
// Information about the principal, resource, and permission to check.
type GoogleCloudPolicysimulatorV1AccessTuple struct {
	FullResourceName *string `json:"fullResourceName,omitempty"`
	Permission       *string `json:"permission,omitempty"`
	Principal        *string `json:"principal,omitempty"`
}
