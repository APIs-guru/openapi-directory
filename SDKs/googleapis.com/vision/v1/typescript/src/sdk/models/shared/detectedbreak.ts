import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DetectedBreakTypeEnum {
    Unknown = "UNKNOWN",
    Space = "SPACE",
    SureSpace = "SURE_SPACE",
    EolSureSpace = "EOL_SURE_SPACE",
    Hyphen = "HYPHEN",
    LineBreak = "LINE_BREAK"
}


// DetectedBreak
/** 
 * Detected start or end of a structural component.
**/
export class DetectedBreak extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isPrefix" })
  isPrefix?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DetectedBreakTypeEnum;
}
