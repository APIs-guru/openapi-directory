import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TextEntryTypeEnum {
    TextTypeUnspecified = "TEXT_TYPE_UNSPECIFIED"
,    PlainText = "PLAIN_TEXT"
,    Html = "HTML"
}


// TextEntry
/** 
 * Represents a body of text.
**/
export class TextEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=type" })
  type?: TextEntryTypeEnum;
}
