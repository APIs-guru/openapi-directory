import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SDKInfoLanguageEnum {
    Unknown = "UNKNOWN",
    Java = "JAVA",
    Python = "PYTHON",
    Go = "GO"
}


// SDKInfo
/** 
 * SDK Information.
**/
export class SDKInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: SDKInfoLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
