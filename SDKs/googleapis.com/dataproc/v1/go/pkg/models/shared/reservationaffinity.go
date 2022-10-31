package shared

type ReservationAffinityConsumeReservationTypeEnum string

const (
	ReservationAffinityConsumeReservationTypeEnumTypeUnspecified     ReservationAffinityConsumeReservationTypeEnum = "TYPE_UNSPECIFIED"
	ReservationAffinityConsumeReservationTypeEnumNoReservation       ReservationAffinityConsumeReservationTypeEnum = "NO_RESERVATION"
	ReservationAffinityConsumeReservationTypeEnumAnyReservation      ReservationAffinityConsumeReservationTypeEnum = "ANY_RESERVATION"
	ReservationAffinityConsumeReservationTypeEnumSpecificReservation ReservationAffinityConsumeReservationTypeEnum = "SPECIFIC_RESERVATION"
)

type ReservationAffinity struct {
	ConsumeReservationType *ReservationAffinityConsumeReservationTypeEnum `json:"consumeReservationType,omitempty"`
	Key                    *string                                        `json:"key,omitempty"`
	Values                 []string                                       `json:"values,omitempty"`
}
