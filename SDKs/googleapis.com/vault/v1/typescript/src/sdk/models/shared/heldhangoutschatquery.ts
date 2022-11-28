import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HeldHangoutsChatQuery
/** 
 * Options for Chat holds.
**/
export class HeldHangoutsChatQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeRooms" })
  includeRooms?: boolean;
}
