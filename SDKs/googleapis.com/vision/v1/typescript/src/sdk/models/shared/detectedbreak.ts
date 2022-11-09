import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DetectedBreakTypeEnum {
    Unknown = "UNKNOWN"
,    Space = "SPACE"
,    SureSpace = "SURE_SPACE"
,    EolSureSpace = "EOL_SURE_SPACE"
,    Hyphen = "HYPHEN"
,    LineBreak = "LINE_BREAK"
}


// DetectedBreak
/** 
 * Detected start or end of a structural component.
**/
export class DetectedBreak extends SpeakeasyBase {
  @Metadata({ data: "json, name=isPrefix" })
  isPrefix?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: DetectedBreakTypeEnum;
}
