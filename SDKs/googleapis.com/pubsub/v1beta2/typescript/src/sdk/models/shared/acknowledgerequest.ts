import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcknowledgeRequest
/** 
 * Request for the Acknowledge method.
**/
export class AcknowledgeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ackIds" })
  ackIds?: string[];
}
