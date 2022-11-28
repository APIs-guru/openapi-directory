import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MembershipsLevelSnippet } from "./membershipslevelsnippet";



// MembershipsLevel
/** 
 * A *membershipsLevel* resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits.
**/
export class MembershipsLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: MembershipsLevelSnippet;
}
