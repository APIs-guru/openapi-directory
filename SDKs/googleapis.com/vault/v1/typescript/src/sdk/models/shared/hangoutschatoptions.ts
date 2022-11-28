import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HangoutsChatOptions
/** 
 * Additional options for Google Chat search
**/
export class HangoutsChatOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeRooms" })
  includeRooms?: boolean;
}
