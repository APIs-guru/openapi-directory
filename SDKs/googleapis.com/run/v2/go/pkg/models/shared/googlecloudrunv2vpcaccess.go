package shared

type GoogleCloudRunV2VpcAccessEgressEnum string

const (
	GoogleCloudRunV2VpcAccessEgressEnumVpcEgressUnspecified GoogleCloudRunV2VpcAccessEgressEnum = "VPC_EGRESS_UNSPECIFIED"
	GoogleCloudRunV2VpcAccessEgressEnumAllTraffic           GoogleCloudRunV2VpcAccessEgressEnum = "ALL_TRAFFIC"
	GoogleCloudRunV2VpcAccessEgressEnumPrivateRangesOnly    GoogleCloudRunV2VpcAccessEgressEnum = "PRIVATE_RANGES_ONLY"
)

// GoogleCloudRunV2VpcAccess
// VPC Access settings. For more information on creating a VPC Connector, visit https://cloud.google.com/vpc/docs/configure-serverless-vpc-access For information on how to configure Cloud Run with an existing VPC Connector, visit https://cloud.google.com/run/docs/configuring/connecting-vpc
type GoogleCloudRunV2VpcAccess struct {
	Connector *string                              `json:"connector,omitempty"`
	Egress    *GoogleCloudRunV2VpcAccessEgressEnum `json:"egress,omitempty"`
}
