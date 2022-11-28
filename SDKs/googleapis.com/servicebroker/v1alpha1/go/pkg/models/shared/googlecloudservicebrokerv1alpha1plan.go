package shared

// GoogleCloudServicebrokerV1alpha1Plan
// Plan message describes a Service Plan.
type GoogleCloudServicebrokerV1alpha1Plan struct {
	Bindable    *bool
	Description *string
	Free        *bool
	ID          *string
	Metadata    map[string]interface{}
	Name        *string
	Schemas     map[string]interface{}
}
