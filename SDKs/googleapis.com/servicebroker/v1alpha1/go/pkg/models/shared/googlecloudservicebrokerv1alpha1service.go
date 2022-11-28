package shared

// GoogleCloudServicebrokerV1alpha1Service
// The resource model mostly follows the Open Service Broker API, as
// described here:
// https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
// Though due to Google Specifics it has additional optional fields.
type GoogleCloudServicebrokerV1alpha1Service struct {
	Bindable            *bool
	BindingRetrievable  *bool
	DashboardClient     *GoogleCloudServicebrokerV1alpha1DashboardClient
	Description         *string
	ID                  *string
	InstanceRetrievable *bool
	Metadata            map[string]interface{}
	Name                *string
	PlanUpdateable      *bool
	Plans               []GoogleCloudServicebrokerV1alpha1Plan
	Tags                []string
}
