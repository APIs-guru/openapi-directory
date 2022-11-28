import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum {
    LogTypeUnspecified = "LOG_TYPE_UNSPECIFIED",
    Gws = "GWS",
    Gts = "GTS",
    All = "ALL"
}
export declare enum EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum {
    PrivacyTypeUnspecified = "PRIVACY_TYPE_UNSPECIFIED",
    NotPii = "NOT_PII",
    Pii = "PII",
    Spii = "SPII",
    Unsure = "UNSURE"
}
export declare enum EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum {
    SanitizeTypeUnspecified = "SANITIZE_TYPE_UNSPECIFIED",
    Scrub = "SCRUB",
    Anonymize = "ANONYMIZE",
    AnonymizeLimitedRepeatable = "ANONYMIZE_LIMITED_REPEATABLE",
    Obfuscate = "OBFUSCATE",
    Encrypt = "ENCRYPT",
    DoNotSanitize = "DO_NOT_SANITIZE"
}
/**
 * Identifies whether a field contains, or may contain, PII or sensitive data, and how to sanitize the field if it does. If a field's privacy type cannot be determined then it is sanitized (e.g., scrubbed). The specific sanitizer implementation is determined by run-time configuration and environment options (e.g., prod vs. qa). next_id: 5
**/
export declare class EnterpriseCrmLoggingGwsSanitizeOptions extends SpeakeasyBase {
    isAlreadySanitized?: boolean;
    logType?: EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum[];
    privacy?: EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum;
    sanitizeType?: EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum;
}
