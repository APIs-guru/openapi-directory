package shared

type GoogleCloudRunV2TrafficTargetTypeEnum string

const (
	GoogleCloudRunV2TrafficTargetTypeEnumTrafficTargetAllocationTypeUnspecified GoogleCloudRunV2TrafficTargetTypeEnum = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED"
	GoogleCloudRunV2TrafficTargetTypeEnumTrafficTargetAllocationTypeLatest      GoogleCloudRunV2TrafficTargetTypeEnum = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
	GoogleCloudRunV2TrafficTargetTypeEnumTrafficTargetAllocationTypeRevision    GoogleCloudRunV2TrafficTargetTypeEnum = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"
)

type GoogleCloudRunV2TrafficTarget struct {
	Percent  *int32                                 `json:"percent"`
	Revision *string                                `json:"revision"`
	Tag      *string                                `json:"tag"`
	Type     *GoogleCloudRunV2TrafficTargetTypeEnum `json:"type"`
}
