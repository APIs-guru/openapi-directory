package shared

type ReservationAffinityConsumeReservationTypeEnum string

const (
	ReservationAffinityConsumeReservationTypeEnumUnspecified         ReservationAffinityConsumeReservationTypeEnum = "UNSPECIFIED"
	ReservationAffinityConsumeReservationTypeEnumNoReservation       ReservationAffinityConsumeReservationTypeEnum = "NO_RESERVATION"
	ReservationAffinityConsumeReservationTypeEnumAnyReservation      ReservationAffinityConsumeReservationTypeEnum = "ANY_RESERVATION"
	ReservationAffinityConsumeReservationTypeEnumSpecificReservation ReservationAffinityConsumeReservationTypeEnum = "SPECIFIC_RESERVATION"
)

type ReservationAffinity struct {
	ConsumeReservationType *ReservationAffinityConsumeReservationTypeEnum `json:"consumeReservationType"`
	Key                    *string                                        `json:"key"`
	Values                 []string                                       `json:"values"`
}
