import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HangoutsChatOptions
/** 
 * Additional options for Google Chat search
**/
export class HangoutsChatOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeRooms" })
  includeRooms?: boolean;
}
