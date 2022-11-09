import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AppIntegrityAppRecognitionVerdictEnum {
    Unknown = "UNKNOWN",
    PlayRecognized = "PLAY_RECOGNIZED",
    UnrecognizedVersion = "UNRECOGNIZED_VERSION",
    Unevaluated = "UNEVALUATED"
}
/**
 * Contains the application integrity information.
**/
export declare class AppIntegrity extends SpeakeasyBase {
    appRecognitionVerdict?: AppIntegrityAppRecognitionVerdictEnum;
    certificateSha256Digest?: string[];
    packageName?: string;
    versionCode?: string;
}
