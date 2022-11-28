import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { EntityResult } from "./entityresult";



// LookupResponse
/** 
 * The response for Datastore.Lookup.
**/
export class LookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deferred", elemType: Key })
  deferred?: Key[];

  @SpeakeasyMetadata({ data: "json, name=found", elemType: EntityResult })
  found?: EntityResult[];

  @SpeakeasyMetadata({ data: "json, name=missing", elemType: EntityResult })
  missing?: EntityResult[];

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;
}
