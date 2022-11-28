package shared

type GoogleCloudRunV2TrafficTargetStatusTypeEnum string

const (
	GoogleCloudRunV2TrafficTargetStatusTypeEnumTrafficTargetAllocationTypeUnspecified GoogleCloudRunV2TrafficTargetStatusTypeEnum = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED"
	GoogleCloudRunV2TrafficTargetStatusTypeEnumTrafficTargetAllocationTypeLatest      GoogleCloudRunV2TrafficTargetStatusTypeEnum = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
	GoogleCloudRunV2TrafficTargetStatusTypeEnumTrafficTargetAllocationTypeRevision    GoogleCloudRunV2TrafficTargetStatusTypeEnum = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"
)

// GoogleCloudRunV2TrafficTargetStatus
// Represents the observed state of a single `TrafficTarget` entry.
type GoogleCloudRunV2TrafficTargetStatus struct {
	Percent  *int32                                       `json:"percent,omitempty"`
	Revision *string                                      `json:"revision,omitempty"`
	Tag      *string                                      `json:"tag,omitempty"`
	Type     *GoogleCloudRunV2TrafficTargetStatusTypeEnum `json:"type,omitempty"`
	URI      *string                                      `json:"uri,omitempty"`
}
