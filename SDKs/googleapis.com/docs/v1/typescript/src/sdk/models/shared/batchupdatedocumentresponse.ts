import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Response } from "./response";
import { WriteControl } from "./writecontrol";



// BatchUpdateDocumentResponse
/** 
 * Response message from a BatchUpdateDocument request.
**/
export class BatchUpdateDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentId" })
  documentId?: string;

  @SpeakeasyMetadata({ data: "json, name=replies", elemType: Response })
  replies?: Response[];

  @SpeakeasyMetadata({ data: "json, name=writeControl" })
  writeControl?: WriteControl;
}
