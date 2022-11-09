import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Response } from "./response";
import { WriteControl } from "./writecontrol";


// BatchUpdatePresentationResponse
/** 
 * Response message from a batch update.
**/
export class BatchUpdatePresentationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=presentationId" })
  presentationId?: string;

  @Metadata({ data: "json, name=replies", elemType: shared.Response })
  replies?: Response[];

  @Metadata({ data: "json, name=writeControl" })
  writeControl?: WriteControl;
}
