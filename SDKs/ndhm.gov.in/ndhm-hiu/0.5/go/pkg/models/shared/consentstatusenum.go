package shared

type ConsentStatusEnum string

const (
	ConsentStatusEnumGranted   ConsentStatusEnum = "GRANTED"
	ConsentStatusEnumExpired   ConsentStatusEnum = "EXPIRED"
	ConsentStatusEnumDenied    ConsentStatusEnum = "DENIED"
	ConsentStatusEnumRequested ConsentStatusEnum = "REQUESTED"
	ConsentStatusEnumRevoked   ConsentStatusEnum = "REVOKED"
)
