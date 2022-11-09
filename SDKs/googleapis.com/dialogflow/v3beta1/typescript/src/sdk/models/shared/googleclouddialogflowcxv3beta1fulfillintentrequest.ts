import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1Match } from "./googleclouddialogflowcxv3beta1match";
import { GoogleCloudDialogflowCxV3beta1MatchIntentRequest } from "./googleclouddialogflowcxv3beta1matchintentrequest";
import { GoogleCloudDialogflowCxV3beta1OutputAudioConfig } from "./googleclouddialogflowcxv3beta1outputaudioconfig";


// GoogleCloudDialogflowCxV3beta1FulfillIntentRequest
/** 
 * Request of FulfillIntent
**/
export class GoogleCloudDialogflowCxV3beta1FulfillIntentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=match" })
  match?: GoogleCloudDialogflowCxV3beta1Match;

  @Metadata({ data: "json, name=matchIntentRequest" })
  matchIntentRequest?: GoogleCloudDialogflowCxV3beta1MatchIntentRequest;

  @Metadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
}
