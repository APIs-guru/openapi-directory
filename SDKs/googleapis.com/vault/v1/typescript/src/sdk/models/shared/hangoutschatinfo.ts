import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HangoutsChatInfo
/** 
 * The Chat spaces to search
**/
export class HangoutsChatInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=roomId" })
  roomId?: string[];
}
