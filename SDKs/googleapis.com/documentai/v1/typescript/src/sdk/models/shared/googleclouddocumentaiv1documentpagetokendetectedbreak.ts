import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreakTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Space = "SPACE"
,    WideSpace = "WIDE_SPACE"
,    Hyphen = "HYPHEN"
}


// GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak
/** 
 * Detected break at the end of a Token.
**/
export class GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreakTypeEnum;
}
