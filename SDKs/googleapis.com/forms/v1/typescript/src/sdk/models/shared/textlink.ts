import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextLink
/** 
 * Link for text.
**/
export class TextLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayText" })
  displayText?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
