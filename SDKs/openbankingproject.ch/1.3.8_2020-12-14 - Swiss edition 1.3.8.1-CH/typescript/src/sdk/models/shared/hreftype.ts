import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HrefType
/** 
 * Link to a resource.
**/
export class HrefType extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}
