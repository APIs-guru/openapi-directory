import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MoveFolderRequest
/** 
 * The MoveFolder request message.
**/
export class MoveFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationParent" })
  destinationParent?: string;
}
