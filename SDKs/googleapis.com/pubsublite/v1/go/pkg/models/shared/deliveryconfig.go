package shared

type DeliveryConfigDeliveryRequirementEnum string

const (
	DeliveryConfigDeliveryRequirementEnumDeliveryRequirementUnspecified DeliveryConfigDeliveryRequirementEnum = "DELIVERY_REQUIREMENT_UNSPECIFIED"
	DeliveryConfigDeliveryRequirementEnumDeliverImmediately             DeliveryConfigDeliveryRequirementEnum = "DELIVER_IMMEDIATELY"
	DeliveryConfigDeliveryRequirementEnumDeliverAfterStored             DeliveryConfigDeliveryRequirementEnum = "DELIVER_AFTER_STORED"
)

type DeliveryConfig struct {
	DeliveryRequirement *DeliveryConfigDeliveryRequirementEnum `json:"deliveryRequirement,omitempty"`
}
