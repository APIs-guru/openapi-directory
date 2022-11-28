package shared

// GoogleCloudServicebrokerV1beta1Service
// The resource model mostly follows the Open Service Broker API, as
// described here:
// https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
// Though due to Google Specifics it has additional optional fields.
type GoogleCloudServicebrokerV1beta1Service struct {
	Bindable             *bool
	BindingRetrievable   *bool
	BindingsRetrievable  *bool
	DashboardClient      *GoogleCloudServicebrokerV1beta1DashboardClient
	Description          *string
	ID                   *string
	InstancesRetrievable *bool
	Metadata             map[string]interface{}
	Name                 *string
	PlanUpdateable       *bool
	Plans                []GoogleCloudServicebrokerV1beta1Plan
	Tags                 []string
}
