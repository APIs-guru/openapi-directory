import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcknowledgeRequest
/** 
 * Request for the Acknowledge method.
**/
export class AcknowledgeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ackId" })
  ackId?: string[];

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: string;
}
