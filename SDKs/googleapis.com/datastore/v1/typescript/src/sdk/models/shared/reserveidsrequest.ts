import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Key } from "./key";


// ReserveIdsRequest
/** 
 * The request for Datastore.ReserveIds.
**/
export class ReserveIdsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=databaseId" })
  databaseId?: string;

  @Metadata({ data: "json, name=keys", elemType: shared.Key })
  keys?: Key[];
}
