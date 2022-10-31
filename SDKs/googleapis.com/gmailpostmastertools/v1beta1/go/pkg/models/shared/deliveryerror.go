package shared




type DeliveryErrorErrorClassEnum string

const (
    DeliveryErrorErrorClassEnumDeliveryErrorClassUnspecified DeliveryErrorErrorClassEnum = "DELIVERY_ERROR_CLASS_UNSPECIFIED"
DeliveryErrorErrorClassEnumPermanentError DeliveryErrorErrorClassEnum = "PERMANENT_ERROR"
DeliveryErrorErrorClassEnumTemporaryError DeliveryErrorErrorClassEnum = "TEMPORARY_ERROR"
)



type DeliveryErrorErrorTypeEnum string

const (
    DeliveryErrorErrorTypeEnumDeliveryErrorTypeUnspecified DeliveryErrorErrorTypeEnum = "DELIVERY_ERROR_TYPE_UNSPECIFIED"
DeliveryErrorErrorTypeEnumRateLimitExceeded DeliveryErrorErrorTypeEnum = "RATE_LIMIT_EXCEEDED"
DeliveryErrorErrorTypeEnumSuspectedSpam DeliveryErrorErrorTypeEnum = "SUSPECTED_SPAM"
DeliveryErrorErrorTypeEnumContentSpammy DeliveryErrorErrorTypeEnum = "CONTENT_SPAMMY"
DeliveryErrorErrorTypeEnumBadAttachment DeliveryErrorErrorTypeEnum = "BAD_ATTACHMENT"
DeliveryErrorErrorTypeEnumBadDmarcPolicy DeliveryErrorErrorTypeEnum = "BAD_DMARC_POLICY"
DeliveryErrorErrorTypeEnumLowIPReputation DeliveryErrorErrorTypeEnum = "LOW_IP_REPUTATION"
DeliveryErrorErrorTypeEnumLowDomainReputation DeliveryErrorErrorTypeEnum = "LOW_DOMAIN_REPUTATION"
DeliveryErrorErrorTypeEnumIPInRbl DeliveryErrorErrorTypeEnum = "IP_IN_RBL"
DeliveryErrorErrorTypeEnumDomainInRbl DeliveryErrorErrorTypeEnum = "DOMAIN_IN_RBL"
DeliveryErrorErrorTypeEnumBadPtrRecord DeliveryErrorErrorTypeEnum = "BAD_PTR_RECORD"
)


type DeliveryError struct {
    ErrorClass *DeliveryErrorErrorClassEnum `json:"errorClass,omitempty"`
    ErrorRatio *float64 `json:"errorRatio,omitempty"`
    ErrorType *DeliveryErrorErrorTypeEnum `json:"errorType,omitempty"`
    
}

