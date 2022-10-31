package shared




type BeaconExpectedStabilityEnum string

const (
    BeaconExpectedStabilityEnumStabilityUnspecified BeaconExpectedStabilityEnum = "STABILITY_UNSPECIFIED"
BeaconExpectedStabilityEnumStable BeaconExpectedStabilityEnum = "STABLE"
BeaconExpectedStabilityEnumPortable BeaconExpectedStabilityEnum = "PORTABLE"
BeaconExpectedStabilityEnumMobile BeaconExpectedStabilityEnum = "MOBILE"
BeaconExpectedStabilityEnumRoving BeaconExpectedStabilityEnum = "ROVING"
)



type BeaconStatusEnum string

const (
    BeaconStatusEnumStatusUnspecified BeaconStatusEnum = "STATUS_UNSPECIFIED"
BeaconStatusEnumActive BeaconStatusEnum = "ACTIVE"
BeaconStatusEnumDecommissioned BeaconStatusEnum = "DECOMMISSIONED"
BeaconStatusEnumInactive BeaconStatusEnum = "INACTIVE"
)


type Beacon struct {
    AdvertisedID *AdvertisedID `json:"advertisedId,omitempty"`
    BeaconName *string `json:"beaconName,omitempty"`
    Description *string `json:"description,omitempty"`
    EphemeralIDRegistration *EphemeralIDRegistration `json:"ephemeralIdRegistration,omitempty"`
    ExpectedStability *BeaconExpectedStabilityEnum `json:"expectedStability,omitempty"`
    IndoorLevel *IndoorLevel `json:"indoorLevel,omitempty"`
    LatLng *LatLng `json:"latLng,omitempty"`
    PlaceID *string `json:"placeId,omitempty"`
    Properties map[string]string `json:"properties,omitempty"`
    ProvisioningKey *string `json:"provisioningKey,omitempty"`
    Status *BeaconStatusEnum `json:"status,omitempty"`
    
}

