import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3Match } from "./googleclouddialogflowcxv3match";
import { GoogleCloudDialogflowCxV3MatchIntentRequest } from "./googleclouddialogflowcxv3matchintentrequest";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";


// GoogleCloudDialogflowCxV3FulfillIntentRequest
/** 
 * Request of FulfillIntent
**/
export class GoogleCloudDialogflowCxV3FulfillIntentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=match" })
  match?: GoogleCloudDialogflowCxV3Match;

  @Metadata({ data: "json, name=matchIntentRequest" })
  matchIntentRequest?: GoogleCloudDialogflowCxV3MatchIntentRequest;

  @Metadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;
}
