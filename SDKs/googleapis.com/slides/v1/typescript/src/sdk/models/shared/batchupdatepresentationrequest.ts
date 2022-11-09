import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Request } from "./request";
import { WriteControl } from "./writecontrol";


// BatchUpdatePresentationRequest
/** 
 * Request message for PresentationsService.BatchUpdatePresentation.
**/
export class BatchUpdatePresentationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.Request })
  requests?: Request[];

  @Metadata({ data: "json, name=writeControl" })
  writeControl?: WriteControl;
}
