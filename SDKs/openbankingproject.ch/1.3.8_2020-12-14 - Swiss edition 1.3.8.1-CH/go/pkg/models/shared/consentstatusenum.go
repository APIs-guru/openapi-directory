package shared




type ConsentStatusEnum string

const (
    ConsentStatusEnumReceived ConsentStatusEnum = "received"
ConsentStatusEnumRejected ConsentStatusEnum = "rejected"
ConsentStatusEnumValid ConsentStatusEnum = "valid"
ConsentStatusEnumRevokedByPsu ConsentStatusEnum = "revokedByPsu"
ConsentStatusEnumExpired ConsentStatusEnum = "expired"
ConsentStatusEnumTerminatedByTpp ConsentStatusEnum = "terminatedByTpp"
ConsentStatusEnumPartiallyAuthorised ConsentStatusEnum = "partiallyAuthorised"
)


