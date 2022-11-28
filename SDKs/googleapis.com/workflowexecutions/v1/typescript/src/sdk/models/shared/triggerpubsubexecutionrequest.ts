import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PubsubMessage } from "./pubsubmessage";



// TriggerPubsubExecutionRequest
/** 
 * Request for the TriggerPubsubExecution method.
**/
export class TriggerPubsubExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GCPCloudEventsMode" })
  gcpCloudEventsMode?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: PubsubMessage;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: string;
}
