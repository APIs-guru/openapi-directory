import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { ReadOptions } from "./readoptions";



// LookupRequest
/** 
 * The request for Datastore.Lookup.
**/
export class LookupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseId" })
  databaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=keys", elemType: Key })
  keys?: Key[];

  @SpeakeasyMetadata({ data: "json, name=readOptions" })
  readOptions?: ReadOptions;
}
