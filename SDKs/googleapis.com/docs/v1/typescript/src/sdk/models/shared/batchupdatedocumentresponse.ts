import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Response } from "./response";
import { WriteControl } from "./writecontrol";


// BatchUpdateDocumentResponse
/** 
 * Response message from a BatchUpdateDocument request.
**/
export class BatchUpdateDocumentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentId" })
  documentId?: string;

  @Metadata({ data: "json, name=replies", elemType: shared.Response })
  replies?: Response[];

  @Metadata({ data: "json, name=writeControl" })
  writeControl?: WriteControl;
}
