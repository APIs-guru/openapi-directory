import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Key } from "./key";


// AllocateIdsRequest
/** 
 * The request for Datastore.AllocateIds.
**/
export class AllocateIdsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=databaseId" })
  databaseId?: string;

  @Metadata({ data: "json, name=keys", elemType: shared.Key })
  keys?: Key[];
}
