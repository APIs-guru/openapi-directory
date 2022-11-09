import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SdkInfoLanguageEnum {
    Unknown = "UNKNOWN"
,    Java = "JAVA"
,    Python = "PYTHON"
,    Go = "GO"
}


// SdkInfo
/** 
 * SDK Information.
**/
export class SdkInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=language" })
  language?: SdkInfoLanguageEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
