import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PoolOption } from "./pooloption";
import { Volume } from "./volume";


export enum BuildOptionsLogStreamingOptionEnum {
    StreamDefault = "STREAM_DEFAULT",
    StreamOn = "STREAM_ON",
    StreamOff = "STREAM_OFF"
}

export enum BuildOptionsLoggingEnum {
    LoggingUnspecified = "LOGGING_UNSPECIFIED",
    Legacy = "LEGACY",
    GcsOnly = "GCS_ONLY",
    StackdriverOnly = "STACKDRIVER_ONLY",
    CloudLoggingOnly = "CLOUD_LOGGING_ONLY",
    None = "NONE"
}

export enum BuildOptionsMachineTypeEnum {
    Unspecified = "UNSPECIFIED",
    N1Highcpu8 = "N1_HIGHCPU_8",
    N1Highcpu32 = "N1_HIGHCPU_32",
    E2Highcpu8 = "E2_HIGHCPU_8",
    E2Highcpu32 = "E2_HIGHCPU_32"
}

export enum BuildOptionsRequestedVerifyOptionEnum {
    NotVerified = "NOT_VERIFIED",
    Verified = "VERIFIED"
}

export enum BuildOptionsSourceProvenanceHashEnum {
    None = "NONE",
    Sha256 = "SHA256",
    Md5 = "MD5"
}

export enum BuildOptionsSubstitutionOptionEnum {
    MustMatch = "MUST_MATCH",
    AllowLoose = "ALLOW_LOOSE"
}


// BuildOptions
/** 
 * Optional arguments to enable specific features of builds.
**/
export class BuildOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamicSubstitutions" })
  dynamicSubstitutions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=env" })
  env?: string[];

  @SpeakeasyMetadata({ data: "json, name=logStreamingOption" })
  logStreamingOption?: BuildOptionsLogStreamingOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=logging" })
  logging?: BuildOptionsLoggingEnum;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: BuildOptionsMachineTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=pool" })
  pool?: PoolOption;

  @SpeakeasyMetadata({ data: "json, name=requestedVerifyOption" })
  requestedVerifyOption?: BuildOptionsRequestedVerifyOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=secretEnv" })
  secretEnv?: string[];

  @SpeakeasyMetadata({ data: "json, name=sourceProvenanceHash" })
  sourceProvenanceHash?: BuildOptionsSourceProvenanceHashEnum[];

  @SpeakeasyMetadata({ data: "json, name=substitutionOption" })
  substitutionOption?: BuildOptionsSubstitutionOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume })
  volumes?: Volume[];

  @SpeakeasyMetadata({ data: "json, name=workerPool" })
  workerPool?: string;
}
