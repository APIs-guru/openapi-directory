package shared

type GoogleCloudPolicysimulatorV1AccessTuple struct {
	FullResourceName *string `json:"fullResourceName,omitempty"`
	Permission       *string `json:"permission,omitempty"`
	Principal        *string `json:"principal,omitempty"`
}
