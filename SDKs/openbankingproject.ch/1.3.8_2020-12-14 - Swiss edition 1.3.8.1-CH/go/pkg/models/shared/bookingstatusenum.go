package shared

type BookingStatusEnum string

const (
	BookingStatusEnumInformation BookingStatusEnum = "information"
	BookingStatusEnumBooked      BookingStatusEnum = "booked"
	BookingStatusEnumPending     BookingStatusEnum = "pending"
	BookingStatusEnumBoth        BookingStatusEnum = "both"
)
