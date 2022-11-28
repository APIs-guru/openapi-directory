import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Match } from "./googleclouddialogflowcxv3match";
import { GoogleCloudDialogflowCxV3MatchIntentRequest } from "./googleclouddialogflowcxv3matchintentrequest";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";



// GoogleCloudDialogflowCxV3FulfillIntentRequest
/** 
 * Request of FulfillIntent
**/
export class GoogleCloudDialogflowCxV3FulfillIntentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: GoogleCloudDialogflowCxV3Match;

  @SpeakeasyMetadata({ data: "json, name=matchIntentRequest" })
  matchIntentRequest?: GoogleCloudDialogflowCxV3MatchIntentRequest;

  @SpeakeasyMetadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;
}
