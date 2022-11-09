import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextLink
/** 
 * Link for text.
**/
export class TextLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayText" })
  displayText?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
