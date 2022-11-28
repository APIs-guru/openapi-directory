import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Request } from "./request";
import { WriteControl } from "./writecontrol";



// BatchUpdateDocumentRequest
/** 
 * Request message for BatchUpdateDocument.
**/
export class BatchUpdateDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: Request })
  requests?: Request[];

  @SpeakeasyMetadata({ data: "json, name=writeControl" })
  writeControl?: WriteControl;
}
