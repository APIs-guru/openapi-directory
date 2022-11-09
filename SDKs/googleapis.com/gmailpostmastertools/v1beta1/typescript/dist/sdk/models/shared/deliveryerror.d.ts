import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DeliveryErrorErrorClassEnum {
    DeliveryErrorClassUnspecified = "DELIVERY_ERROR_CLASS_UNSPECIFIED",
    PermanentError = "PERMANENT_ERROR",
    TemporaryError = "TEMPORARY_ERROR"
}
export declare enum DeliveryErrorErrorTypeEnum {
    DeliveryErrorTypeUnspecified = "DELIVERY_ERROR_TYPE_UNSPECIFIED",
    RateLimitExceeded = "RATE_LIMIT_EXCEEDED",
    SuspectedSpam = "SUSPECTED_SPAM",
    ContentSpammy = "CONTENT_SPAMMY",
    BadAttachment = "BAD_ATTACHMENT",
    BadDmarcPolicy = "BAD_DMARC_POLICY",
    LowIpReputation = "LOW_IP_REPUTATION",
    LowDomainReputation = "LOW_DOMAIN_REPUTATION",
    IpInRbl = "IP_IN_RBL",
    DomainInRbl = "DOMAIN_IN_RBL",
    BadPtrRecord = "BAD_PTR_RECORD"
}
/**
 * Metric on a particular delivery error type.
**/
export declare class DeliveryError extends SpeakeasyBase {
    errorClass?: DeliveryErrorErrorClassEnum;
    errorRatio?: number;
    errorType?: DeliveryErrorErrorTypeEnum;
}
