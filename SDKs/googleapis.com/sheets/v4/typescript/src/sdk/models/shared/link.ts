import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Link
/** 
 * An external or local reference.
**/
export class Link extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
