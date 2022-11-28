import { SpeakeasyBase } from "../../../internal/utils";
import { OutdatedLibrary } from "./outdatedlibrary";
import { ViolatingResource } from "./violatingresource";
import { VulnerableHeaders } from "./vulnerableheaders";
import { VulnerableParameters } from "./vulnerableparameters";
import { Xss } from "./xss";
export declare enum FindingFindingTypeEnum {
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
 * A Finding resource represents a vulnerability instance identified during a ScanRun.
**/
export declare class Finding extends SpeakeasyBase {
    body?: string;
    description?: string;
    finalUrl?: string;
    findingType?: FindingFindingTypeEnum;
    frameUrl?: string;
    fuzzedUrl?: string;
    httpMethod?: string;
    name?: string;
    outdatedLibrary?: OutdatedLibrary;
    reproductionUrl?: string;
    trackingId?: string;
    violatingResource?: ViolatingResource;
    vulnerableHeaders?: VulnerableHeaders;
    vulnerableParameters?: VulnerableParameters;
    xss?: Xss;
}
