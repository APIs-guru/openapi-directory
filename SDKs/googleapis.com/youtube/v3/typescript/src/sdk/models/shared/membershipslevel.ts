import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MembershipsLevelSnippet } from "./membershipslevelsnippet";


// MembershipsLevel
/** 
 * A *membershipsLevel* resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits.
**/
export class MembershipsLevel extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: MembershipsLevelSnippet;
}
