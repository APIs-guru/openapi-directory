package shared

type GoogleCloudRunV2TrafficTargetStatusTypeEnum string

const (
	GoogleCloudRunV2TrafficTargetStatusTypeEnumTrafficTargetAllocationTypeUnspecified GoogleCloudRunV2TrafficTargetStatusTypeEnum = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED"
	GoogleCloudRunV2TrafficTargetStatusTypeEnumTrafficTargetAllocationTypeLatest      GoogleCloudRunV2TrafficTargetStatusTypeEnum = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
	GoogleCloudRunV2TrafficTargetStatusTypeEnumTrafficTargetAllocationTypeRevision    GoogleCloudRunV2TrafficTargetStatusTypeEnum = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"
)

type GoogleCloudRunV2TrafficTargetStatus struct {
	Percent  *int32                                       `json:"percent"`
	Revision *string                                      `json:"revision"`
	Tag      *string                                      `json:"tag"`
	Type     *GoogleCloudRunV2TrafficTargetStatusTypeEnum `json:"type"`
	URI      *string                                      `json:"uri"`
}
