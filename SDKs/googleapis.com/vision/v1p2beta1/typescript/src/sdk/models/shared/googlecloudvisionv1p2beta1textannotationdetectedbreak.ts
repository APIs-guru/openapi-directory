import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnum {
    Unknown = "UNKNOWN",
    Space = "SPACE",
    SureSpace = "SURE_SPACE",
    EolSureSpace = "EOL_SURE_SPACE",
    Hyphen = "HYPHEN",
    LineBreak = "LINE_BREAK"
}


// GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak
/** 
 * Detected start or end of a structural component.
**/
export class GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isPrefix" })
  isPrefix?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnum;
}
