import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TextFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    Markdown = "MARKDOWN",
    Raw = "RAW"
}


// Text
/** 
 * A widget that displays textual content.
**/
export class Text extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: TextFormatEnum;
}
