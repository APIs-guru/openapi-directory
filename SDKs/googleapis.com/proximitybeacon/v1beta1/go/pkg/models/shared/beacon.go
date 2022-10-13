package shared

type BeaconExpectedStabilityEnum string

const (
	BeaconExpectedStabilityEnumStabilityUnspecified BeaconExpectedStabilityEnum = "STABILITY_UNSPECIFIED"
	BeaconExpectedStabilityEnumStable               BeaconExpectedStabilityEnum = "STABLE"
	BeaconExpectedStabilityEnumPortable             BeaconExpectedStabilityEnum = "PORTABLE"
	BeaconExpectedStabilityEnumMobile               BeaconExpectedStabilityEnum = "MOBILE"
	BeaconExpectedStabilityEnumRoving               BeaconExpectedStabilityEnum = "ROVING"
)

type BeaconStatusEnum string

const (
	BeaconStatusEnumStatusUnspecified BeaconStatusEnum = "STATUS_UNSPECIFIED"
	BeaconStatusEnumActive            BeaconStatusEnum = "ACTIVE"
	BeaconStatusEnumDecommissioned    BeaconStatusEnum = "DECOMMISSIONED"
	BeaconStatusEnumInactive          BeaconStatusEnum = "INACTIVE"
)

type Beacon struct {
	AdvertisedID            *AdvertisedID                `json:"advertisedId"`
	BeaconName              *string                      `json:"beaconName"`
	Description             *string                      `json:"description"`
	EphemeralIDRegistration *EphemeralIDRegistration     `json:"ephemeralIdRegistration"`
	ExpectedStability       *BeaconExpectedStabilityEnum `json:"expectedStability"`
	IndoorLevel             *IndoorLevel                 `json:"indoorLevel"`
	LatLng                  *LatLng                      `json:"latLng"`
	PlaceID                 *string                      `json:"placeId"`
	Properties              map[string]string            `json:"properties"`
	ProvisioningKey         *string                      `json:"provisioningKey"`
	Status                  *BeaconStatusEnum            `json:"status"`
}
