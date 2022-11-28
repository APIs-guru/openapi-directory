import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";



// AllocateIdsRequest
/** 
 * The request for Datastore.AllocateIds.
**/
export class AllocateIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseId" })
  databaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=keys", elemType: Key })
  keys?: Key[];
}
