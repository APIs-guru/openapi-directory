package shared




type ScaStatusEnum string

const (
    ScaStatusEnumReceived ScaStatusEnum = "received"
ScaStatusEnumPsuIdentified ScaStatusEnum = "psuIdentified"
ScaStatusEnumPsuAuthenticated ScaStatusEnum = "psuAuthenticated"
ScaStatusEnumScaMethodSelected ScaStatusEnum = "scaMethodSelected"
ScaStatusEnumStarted ScaStatusEnum = "started"
ScaStatusEnumUnconfirmed ScaStatusEnum = "unconfirmed"
ScaStatusEnumFinalised ScaStatusEnum = "finalised"
ScaStatusEnumFailed ScaStatusEnum = "failed"
ScaStatusEnumExempted ScaStatusEnum = "exempted"
)


