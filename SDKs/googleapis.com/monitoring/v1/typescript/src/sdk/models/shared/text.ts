import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TextFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED"
,    Markdown = "MARKDOWN"
,    Raw = "RAW"
}


// Text
/** 
 * A widget that displays textual content.
**/
export class Text extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=format" })
  format?: TextFormatEnum;
}
