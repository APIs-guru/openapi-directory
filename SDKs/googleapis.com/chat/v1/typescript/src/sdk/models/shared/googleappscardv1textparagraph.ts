import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsCardV1TextParagraph
/** 
 * A paragraph of text that supports formatting. See [Text formatting](https://developers.google.com/workspace/add-ons/concepts/widgets#text_formatting) for details.
**/
export class GoogleAppsCardV1TextParagraph extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;
}
