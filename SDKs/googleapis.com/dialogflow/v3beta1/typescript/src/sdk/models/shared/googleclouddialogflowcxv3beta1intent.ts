import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1IntentParameter } from "./googleclouddialogflowcxv3beta1intentparameter";
import { GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase } from "./googleclouddialogflowcxv3beta1intenttrainingphrase";



// GoogleCloudDialogflowCxV3beta1Intent
/** 
 * An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.
**/
export class GoogleCloudDialogflowCxV3beta1Intent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=isFallback" })
  isFallback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudDialogflowCxV3beta1IntentParameter })
  parameters?: GoogleCloudDialogflowCxV3beta1IntentParameter[];

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=trainingPhrases", elemType: GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase })
  trainingPhrases?: GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase[];
}
