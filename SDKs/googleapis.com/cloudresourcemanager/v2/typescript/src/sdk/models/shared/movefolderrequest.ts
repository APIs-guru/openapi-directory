import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MoveFolderRequest
/** 
 * The MoveFolder request message.
**/
export class MoveFolderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationParent" })
  destinationParent?: string;
}
