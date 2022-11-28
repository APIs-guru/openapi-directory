package shared

type ReservationAffinityConsumeReservationTypeEnum string

const (
	ReservationAffinityConsumeReservationTypeEnumUnspecified         ReservationAffinityConsumeReservationTypeEnum = "UNSPECIFIED"
	ReservationAffinityConsumeReservationTypeEnumNoReservation       ReservationAffinityConsumeReservationTypeEnum = "NO_RESERVATION"
	ReservationAffinityConsumeReservationTypeEnumAnyReservation      ReservationAffinityConsumeReservationTypeEnum = "ANY_RESERVATION"
	ReservationAffinityConsumeReservationTypeEnumSpecificReservation ReservationAffinityConsumeReservationTypeEnum = "SPECIFIC_RESERVATION"
)

// ReservationAffinity
// [ReservationAffinity](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) is the configuration of desired reservation which instances could take capacity from.
type ReservationAffinity struct {
	ConsumeReservationType *ReservationAffinityConsumeReservationTypeEnum `json:"consumeReservationType,omitempty"`
	Key                    *string                                        `json:"key,omitempty"`
	Values                 []string                                       `json:"values,omitempty"`
}
