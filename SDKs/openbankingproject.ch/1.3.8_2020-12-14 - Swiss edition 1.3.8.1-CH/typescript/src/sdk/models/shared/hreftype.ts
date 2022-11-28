import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HrefType
/** 
 * Link to a resource.
**/
export class HrefType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}
