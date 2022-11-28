package shared

// GoogleCloudPolicytroubleshooterV1betaAccessTuple
// Information about the member, resource, and permission to check.
type GoogleCloudPolicytroubleshooterV1betaAccessTuple struct {
	FullResourceName *string `json:"fullResourceName,omitempty"`
	Permission       *string `json:"permission,omitempty"`
	Principal        *string `json:"principal,omitempty"`
}
