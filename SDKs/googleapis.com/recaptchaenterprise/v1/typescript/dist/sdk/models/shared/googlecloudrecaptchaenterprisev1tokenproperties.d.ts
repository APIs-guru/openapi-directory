import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum {
    InvalidReasonUnspecified = "INVALID_REASON_UNSPECIFIED",
    UnknownInvalidReason = "UNKNOWN_INVALID_REASON",
    Malformed = "MALFORMED",
    Expired = "EXPIRED",
    Dupe = "DUPE",
    Missing = "MISSING",
    BrowserError = "BROWSER_ERROR"
}
export declare class GoogleCloudRecaptchaenterpriseV1TokenProperties extends SpeakeasyBase {
    action?: string;
    androidPackageName?: string;
    createTime?: string;
    hostname?: string;
    invalidReason?: GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum;
    iosBundleId?: string;
    valid?: boolean;
}
