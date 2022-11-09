import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Key } from "./key";
import { EntityResult } from "./entityresult";
import { EntityResult } from "./entityresult";


// LookupResponse
/** 
 * The response for Datastore.Lookup.
**/
export class LookupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deferred", elemType: shared.Key })
  deferred?: Key[];

  @Metadata({ data: "json, name=found", elemType: shared.EntityResult })
  found?: EntityResult[];

  @Metadata({ data: "json, name=missing", elemType: shared.EntityResult })
  missing?: EntityResult[];

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;
}
