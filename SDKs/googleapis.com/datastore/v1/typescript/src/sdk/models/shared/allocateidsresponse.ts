import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";



// AllocateIdsResponse
/** 
 * The response for Datastore.AllocateIds.
**/
export class AllocateIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keys", elemType: Key })
  keys?: Key[];
}
