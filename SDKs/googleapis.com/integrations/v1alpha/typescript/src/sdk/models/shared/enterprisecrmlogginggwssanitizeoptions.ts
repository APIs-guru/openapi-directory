import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum {
    LogTypeUnspecified = "LOG_TYPE_UNSPECIFIED",
    Gws = "GWS",
    Gts = "GTS",
    All = "ALL"
}

export enum EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum {
    PrivacyTypeUnspecified = "PRIVACY_TYPE_UNSPECIFIED",
    NotPii = "NOT_PII",
    Pii = "PII",
    Spii = "SPII",
    Unsure = "UNSURE"
}

export enum EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum {
    SanitizeTypeUnspecified = "SANITIZE_TYPE_UNSPECIFIED",
    Scrub = "SCRUB",
    Anonymize = "ANONYMIZE",
    AnonymizeLimitedRepeatable = "ANONYMIZE_LIMITED_REPEATABLE",
    Obfuscate = "OBFUSCATE",
    Encrypt = "ENCRYPT",
    DoNotSanitize = "DO_NOT_SANITIZE"
}


// EnterpriseCrmLoggingGwsSanitizeOptions
/** 
 * Identifies whether a field contains, or may contain, PII or sensitive data, and how to sanitize the field if it does. If a field's privacy type cannot be determined then it is sanitized (e.g., scrubbed). The specific sanitizer implementation is determined by run-time configuration and environment options (e.g., prod vs. qa). next_id: 5
**/
export class EnterpriseCrmLoggingGwsSanitizeOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isAlreadySanitized" })
  isAlreadySanitized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=logType" })
  logType?: EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum;

  @SpeakeasyMetadata({ data: "json, name=sanitizeType" })
  sanitizeType?: EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum;
}
