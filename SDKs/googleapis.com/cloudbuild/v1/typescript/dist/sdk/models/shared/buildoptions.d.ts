import { SpeakeasyBase } from "../../../internal/utils";
import { PoolOption } from "./pooloption";
import { Volume } from "./volume";
export declare enum BuildOptionsLogStreamingOptionEnum {
    StreamDefault = "STREAM_DEFAULT",
    StreamOn = "STREAM_ON",
    StreamOff = "STREAM_OFF"
}
export declare enum BuildOptionsLoggingEnum {
    LoggingUnspecified = "LOGGING_UNSPECIFIED",
    Legacy = "LEGACY",
    GcsOnly = "GCS_ONLY",
    StackdriverOnly = "STACKDRIVER_ONLY",
    CloudLoggingOnly = "CLOUD_LOGGING_ONLY",
    None = "NONE"
}
export declare enum BuildOptionsMachineTypeEnum {
    Unspecified = "UNSPECIFIED",
    N1Highcpu8 = "N1_HIGHCPU_8",
    N1Highcpu32 = "N1_HIGHCPU_32",
    E2Highcpu8 = "E2_HIGHCPU_8",
    E2Highcpu32 = "E2_HIGHCPU_32"
}
export declare enum BuildOptionsRequestedVerifyOptionEnum {
    NotVerified = "NOT_VERIFIED",
    Verified = "VERIFIED"
}
export declare enum BuildOptionsSourceProvenanceHashEnum {
    None = "NONE",
    Sha256 = "SHA256",
    Md5 = "MD5"
}
export declare enum BuildOptionsSubstitutionOptionEnum {
    MustMatch = "MUST_MATCH",
    AllowLoose = "ALLOW_LOOSE"
}
/**
 * Optional arguments to enable specific features of builds.
**/
export declare class BuildOptions extends SpeakeasyBase {
    diskSizeGb?: string;
    dynamicSubstitutions?: boolean;
    env?: string[];
    logStreamingOption?: BuildOptionsLogStreamingOptionEnum;
    logging?: BuildOptionsLoggingEnum;
    machineType?: BuildOptionsMachineTypeEnum;
    pool?: PoolOption;
    requestedVerifyOption?: BuildOptionsRequestedVerifyOptionEnum;
    secretEnv?: string[];
    sourceProvenanceHash?: BuildOptionsSourceProvenanceHashEnum[];
    substitutionOption?: BuildOptionsSubstitutionOptionEnum;
    volumes?: Volume[];
    workerPool?: string;
}
