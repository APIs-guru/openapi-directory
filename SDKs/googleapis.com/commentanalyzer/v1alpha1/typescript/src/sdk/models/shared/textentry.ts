import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TextEntryTypeEnum {
    TextTypeUnspecified = "TEXT_TYPE_UNSPECIFIED",
    PlainText = "PLAIN_TEXT",
    Html = "HTML"
}


// TextEntry
/** 
 * Represents a body of text.
**/
export class TextEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TextEntryTypeEnum;
}
