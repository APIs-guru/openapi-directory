package shared

type DeliverInfoTargetEnum string

const (
	DeliverInfoTargetEnumTargetUnspecified   DeliverInfoTargetEnum = "TARGET_UNSPECIFIED"
	DeliverInfoTargetEnumInstance            DeliverInfoTargetEnum = "INSTANCE"
	DeliverInfoTargetEnumInternet            DeliverInfoTargetEnum = "INTERNET"
	DeliverInfoTargetEnumGoogleAPI           DeliverInfoTargetEnum = "GOOGLE_API"
	DeliverInfoTargetEnumGkeMaster           DeliverInfoTargetEnum = "GKE_MASTER"
	DeliverInfoTargetEnumCloudSQLInstance    DeliverInfoTargetEnum = "CLOUD_SQL_INSTANCE"
	DeliverInfoTargetEnumPscPublishedService DeliverInfoTargetEnum = "PSC_PUBLISHED_SERVICE"
	DeliverInfoTargetEnumPscGoogleAPI        DeliverInfoTargetEnum = "PSC_GOOGLE_API"
	DeliverInfoTargetEnumPscVpcSc            DeliverInfoTargetEnum = "PSC_VPC_SC"
)

// DeliverInfo
// Details of the final state "deliver" and associated resource.
type DeliverInfo struct {
	ResourceURI *string                `json:"resourceUri,omitempty"`
	Target      *DeliverInfoTargetEnum `json:"target,omitempty"`
}
