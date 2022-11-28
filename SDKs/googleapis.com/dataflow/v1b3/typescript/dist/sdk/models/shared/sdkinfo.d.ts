import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SDKInfoLanguageEnum {
    Unknown = "UNKNOWN",
    Java = "JAVA",
    Python = "PYTHON",
    Go = "GO"
}
/**
 * SDK Information.
**/
export declare class SDKInfo extends SpeakeasyBase {
    language?: SDKInfoLanguageEnum;
    version?: string;
}
