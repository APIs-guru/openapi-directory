import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FindingTypeStatsFindingTypeEnum {
    FindingTypeUnspecified = "FINDING_TYPE_UNSPECIFIED",
    MixedContent = "MIXED_CONTENT",
    OutdatedLibrary = "OUTDATED_LIBRARY",
    RosettaFlash = "ROSETTA_FLASH",
    XssCallback = "XSS_CALLBACK",
    XssError = "XSS_ERROR",
    ClearTextPassword = "CLEAR_TEXT_PASSWORD",
    InvalidContentType = "INVALID_CONTENT_TYPE",
    XssAngularCallback = "XSS_ANGULAR_CALLBACK",
    InvalidHeader = "INVALID_HEADER",
    MisspelledSecurityHeaderName = "MISSPELLED_SECURITY_HEADER_NAME",
    MismatchingSecurityHeaderValues = "MISMATCHING_SECURITY_HEADER_VALUES"
}
/**
 * A FindingTypeStats resource represents stats regarding a specific FindingType of Findings under a given ScanRun.
**/
export declare class FindingTypeStats extends SpeakeasyBase {
    findingCount?: number;
    findingType?: FindingTypeStatsFindingTypeEnum;
}
