import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PubsubMessage } from "./pubsubmessage";


// TriggerPubsubExecutionRequest
/** 
 * Request for the TriggerPubsubExecution method.
**/
export class TriggerPubsubExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GCPCloudEventsMode" })
  gcpCloudEventsMode?: string;

  @Metadata({ data: "json, name=message" })
  message?: PubsubMessage;

  @Metadata({ data: "json, name=subscription" })
  subscription?: string;
}
