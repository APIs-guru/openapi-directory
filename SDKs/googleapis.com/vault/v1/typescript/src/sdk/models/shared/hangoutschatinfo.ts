import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HangoutsChatInfo
/** 
 * The Chat spaces to search
**/
export class HangoutsChatInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roomId" })
  roomId?: string[];
}
