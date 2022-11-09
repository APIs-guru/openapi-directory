import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HtmlContent
/** 
 * HTML content for a creative.
**/
export class HtmlContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=snippet" })
  snippet?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
