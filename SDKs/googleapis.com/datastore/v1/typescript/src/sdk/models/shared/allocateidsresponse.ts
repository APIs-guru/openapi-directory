import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Key } from "./key";


// AllocateIdsResponse
/** 
 * The response for Datastore.AllocateIds.
**/
export class AllocateIdsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keys", elemType: shared.Key })
  keys?: Key[];
}
