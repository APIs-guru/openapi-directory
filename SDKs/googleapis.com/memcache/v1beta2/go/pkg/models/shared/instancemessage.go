package shared

type InstanceMessageCodeEnum string

const (
	InstanceMessageCodeEnumCodeUnspecified            InstanceMessageCodeEnum = "CODE_UNSPECIFIED"
	InstanceMessageCodeEnumZoneDistributionUnbalanced InstanceMessageCodeEnum = "ZONE_DISTRIBUTION_UNBALANCED"
)

type InstanceMessage struct {
	Code    *InstanceMessageCodeEnum `json:"code,omitempty"`
	Message *string                  `json:"message,omitempty"`
}
