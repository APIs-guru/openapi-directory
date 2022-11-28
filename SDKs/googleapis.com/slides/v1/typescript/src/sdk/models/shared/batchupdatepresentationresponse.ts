import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Response } from "./response";
import { WriteControl } from "./writecontrol";



// BatchUpdatePresentationResponse
/** 
 * Response message from a batch update.
**/
export class BatchUpdatePresentationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=presentationId" })
  presentationId?: string;

  @SpeakeasyMetadata({ data: "json, name=replies", elemType: Response })
  replies?: Response[];

  @SpeakeasyMetadata({ data: "json, name=writeControl" })
  writeControl?: WriteControl;
}
