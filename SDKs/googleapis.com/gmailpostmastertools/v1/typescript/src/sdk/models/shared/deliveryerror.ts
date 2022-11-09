import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeliveryErrorErrorClassEnum {
    DeliveryErrorClassUnspecified = "DELIVERY_ERROR_CLASS_UNSPECIFIED"
,    PermanentError = "PERMANENT_ERROR"
,    TemporaryError = "TEMPORARY_ERROR"
}

export enum DeliveryErrorErrorTypeEnum {
    DeliveryErrorTypeUnspecified = "DELIVERY_ERROR_TYPE_UNSPECIFIED"
,    RateLimitExceeded = "RATE_LIMIT_EXCEEDED"
,    SuspectedSpam = "SUSPECTED_SPAM"
,    ContentSpammy = "CONTENT_SPAMMY"
,    BadAttachment = "BAD_ATTACHMENT"
,    BadDmarcPolicy = "BAD_DMARC_POLICY"
,    LowIpReputation = "LOW_IP_REPUTATION"
,    LowDomainReputation = "LOW_DOMAIN_REPUTATION"
,    IpInRbl = "IP_IN_RBL"
,    DomainInRbl = "DOMAIN_IN_RBL"
,    BadPtrRecord = "BAD_PTR_RECORD"
}


// DeliveryError
/** 
 * Metric on a particular delivery error type.
**/
export class DeliveryError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorClass" })
  errorClass?: DeliveryErrorErrorClassEnum;

  @Metadata({ data: "json, name=errorRatio" })
  errorRatio?: number;

  @Metadata({ data: "json, name=errorType" })
  errorType?: DeliveryErrorErrorTypeEnum;
}
