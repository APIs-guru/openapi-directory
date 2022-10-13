package shared

type MessageCode400PisEnum string

const (
	MessageCode400PisEnumFormatError            MessageCode400PisEnum = "FORMAT_ERROR"
	MessageCode400PisEnumParameterNotConsistent MessageCode400PisEnum = "PARAMETER_NOT_CONSISTENT"
	MessageCode400PisEnumParameterNotSupported  MessageCode400PisEnum = "PARAMETER_NOT_SUPPORTED"
	MessageCode400PisEnumServiceInvalid         MessageCode400PisEnum = "SERVICE_INVALID"
	MessageCode400PisEnumResourceUnknown        MessageCode400PisEnum = "RESOURCE_UNKNOWN"
	MessageCode400PisEnumResourceExpired        MessageCode400PisEnum = "RESOURCE_EXPIRED"
	MessageCode400PisEnumResourceBlocked        MessageCode400PisEnum = "RESOURCE_BLOCKED"
	MessageCode400PisEnumTimestampInvalid       MessageCode400PisEnum = "TIMESTAMP_INVALID"
	MessageCode400PisEnumPeriodInvalid          MessageCode400PisEnum = "PERIOD_INVALID"
	MessageCode400PisEnumScaMethodUnknown       MessageCode400PisEnum = "SCA_METHOD_UNKNOWN"
	MessageCode400PisEnumScaInvalid             MessageCode400PisEnum = "SCA_INVALID"
	MessageCode400PisEnumConsentUnknown         MessageCode400PisEnum = "CONSENT_UNKNOWN"
	MessageCode400PisEnumPaymentFailed          MessageCode400PisEnum = "PAYMENT_FAILED"
	MessageCode400PisEnumExecutionDateInvalid   MessageCode400PisEnum = "EXECUTION_DATE_INVALID"
)
