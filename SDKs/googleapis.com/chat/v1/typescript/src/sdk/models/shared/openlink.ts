import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OpenLink
/** 
 * A link that opens a new window.
**/
export class OpenLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
