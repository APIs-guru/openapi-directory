import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AcknowledgeRequest
/** 
 * Request for the Acknowledge method.
**/
export class AcknowledgeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ackIds" })
  ackIds?: string[];
}
