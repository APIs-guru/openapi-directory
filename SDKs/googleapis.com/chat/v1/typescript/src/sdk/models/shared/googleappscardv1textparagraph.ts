import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsCardV1TextParagraph
/** 
 * A paragraph of text that supports formatting. See [Text formatting](https://developers.google.com/workspace/add-ons/concepts/widgets#text_formatting) for details.
**/
export class GoogleAppsCardV1TextParagraph extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
