import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Match } from "./googleclouddialogflowcxv3match";
import { GoogleCloudDialogflowCxV3MatchIntentRequest } from "./googleclouddialogflowcxv3matchintentrequest";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";
/**
 * Request of FulfillIntent
**/
export declare class GoogleCloudDialogflowCxV3FulfillIntentRequest extends SpeakeasyBase {
    match?: GoogleCloudDialogflowCxV3Match;
    matchIntentRequest?: GoogleCloudDialogflowCxV3MatchIntentRequest;
    outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;
}
