import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";



// ReserveIdsRequest
/** 
 * The request for Datastore.ReserveIds.
**/
export class ReserveIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseId" })
  databaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=keys", elemType: Key })
  keys?: Key[];
}
