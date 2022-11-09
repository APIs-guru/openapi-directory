import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AppIntegrityAppRecognitionVerdictEnum {
    Unknown = "UNKNOWN"
,    PlayRecognized = "PLAY_RECOGNIZED"
,    UnrecognizedVersion = "UNRECOGNIZED_VERSION"
,    Unevaluated = "UNEVALUATED"
}


// AppIntegrity
/** 
 * Contains the application integrity information.
**/
export class AppIntegrity extends SpeakeasyBase {
  @Metadata({ data: "json, name=appRecognitionVerdict" })
  appRecognitionVerdict?: AppIntegrityAppRecognitionVerdictEnum;

  @Metadata({ data: "json, name=certificateSha256Digest" })
  certificateSha256Digest?: string[];

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=versionCode" })
  versionCode?: string;
}
