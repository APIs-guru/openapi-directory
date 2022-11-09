import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreakTypeEnum {
    Unknown = "UNKNOWN"
,    Space = "SPACE"
,    SureSpace = "SURE_SPACE"
,    EolSureSpace = "EOL_SURE_SPACE"
,    Hyphen = "HYPHEN"
,    LineBreak = "LINE_BREAK"
}


// GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak
/** 
 * Detected start or end of a structural component.
**/
export class GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak extends SpeakeasyBase {
  @Metadata({ data: "json, name=isPrefix" })
  isPrefix?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreakTypeEnum;
}
