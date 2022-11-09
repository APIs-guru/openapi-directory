import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OpenLink
/** 
 * A link that opens a new window.
**/
export class OpenLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}
