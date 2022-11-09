import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Key } from "./key";
import { ReadOptions } from "./readoptions";


// LookupRequest
/** 
 * The request for Datastore.Lookup.
**/
export class LookupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=databaseId" })
  databaseId?: string;

  @Metadata({ data: "json, name=keys", elemType: shared.Key })
  keys?: Key[];

  @Metadata({ data: "json, name=readOptions" })
  readOptions?: ReadOptions;
}
