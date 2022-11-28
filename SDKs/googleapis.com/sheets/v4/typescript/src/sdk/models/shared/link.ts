import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Link
/** 
 * An external or local reference.
**/
export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
