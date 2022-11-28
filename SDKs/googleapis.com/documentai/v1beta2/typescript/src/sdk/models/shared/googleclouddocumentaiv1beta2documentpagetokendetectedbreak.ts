import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreakTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Space = "SPACE",
    WideSpace = "WIDE_SPACE",
    Hyphen = "HYPHEN"
}


// GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak
/** 
 * Detected break at the end of a Token.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreakTypeEnum;
}
