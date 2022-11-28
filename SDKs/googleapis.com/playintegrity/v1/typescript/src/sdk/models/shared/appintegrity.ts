import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AppIntegrityAppRecognitionVerdictEnum {
    Unknown = "UNKNOWN",
    PlayRecognized = "PLAY_RECOGNIZED",
    UnrecognizedVersion = "UNRECOGNIZED_VERSION",
    Unevaluated = "UNEVALUATED"
}


// AppIntegrity
/** 
 * Contains the application integrity information.
**/
export class AppIntegrity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appRecognitionVerdict" })
  appRecognitionVerdict?: AppIntegrityAppRecognitionVerdictEnum;

  @SpeakeasyMetadata({ data: "json, name=certificateSha256Digest" })
  certificateSha256Digest?: string[];

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=versionCode" })
  versionCode?: string;
}
