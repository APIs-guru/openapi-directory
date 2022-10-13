package shared

type GoogleCloudRunV2VpcAccessEgressEnum string

const (
	GoogleCloudRunV2VpcAccessEgressEnumVpcEgressUnspecified GoogleCloudRunV2VpcAccessEgressEnum = "VPC_EGRESS_UNSPECIFIED"
	GoogleCloudRunV2VpcAccessEgressEnumAllTraffic           GoogleCloudRunV2VpcAccessEgressEnum = "ALL_TRAFFIC"
	GoogleCloudRunV2VpcAccessEgressEnumPrivateRangesOnly    GoogleCloudRunV2VpcAccessEgressEnum = "PRIVATE_RANGES_ONLY"
)

type GoogleCloudRunV2VpcAccess struct {
	Connector *string                              `json:"connector"`
	Egress    *GoogleCloudRunV2VpcAccessEgressEnum `json:"egress"`
}
