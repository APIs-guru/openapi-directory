import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreakTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Space = "SPACE"
,    WideSpace = "WIDE_SPACE"
,    Hyphen = "HYPHEN"
}


// GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak
/** 
 * Detected break at the end of a Token.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreakTypeEnum;
}
