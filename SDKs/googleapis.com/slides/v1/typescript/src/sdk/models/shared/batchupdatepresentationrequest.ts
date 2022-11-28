import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Request } from "./request";
import { WriteControl } from "./writecontrol";



// BatchUpdatePresentationRequest
/** 
 * Request message for PresentationsService.BatchUpdatePresentation.
**/
export class BatchUpdatePresentationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: Request })
  requests?: Request[];

  @SpeakeasyMetadata({ data: "json, name=writeControl" })
  writeControl?: WriteControl;
}
