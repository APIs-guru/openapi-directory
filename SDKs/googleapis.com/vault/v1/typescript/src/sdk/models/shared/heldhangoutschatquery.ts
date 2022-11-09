import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HeldHangoutsChatQuery
/** 
 * Options for Chat holds.
**/
export class HeldHangoutsChatQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeRooms" })
  includeRooms?: boolean;
}
