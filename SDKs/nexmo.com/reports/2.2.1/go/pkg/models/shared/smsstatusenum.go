package shared

type SmsStatusEnum string

const (
	SmsStatusEnumDelivered SmsStatusEnum = "delivered"
	SmsStatusEnumExpired   SmsStatusEnum = "expired"
	SmsStatusEnumFailed    SmsStatusEnum = "failed"
	SmsStatusEnumRejected  SmsStatusEnum = "rejected"
	SmsStatusEnumAccepted  SmsStatusEnum = "accepted"
	SmsStatusEnumBuffered  SmsStatusEnum = "buffered"
	SmsStatusEnumUnknown   SmsStatusEnum = "unknown"
)
