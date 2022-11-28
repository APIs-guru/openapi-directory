import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3IntentParameter } from "./googleclouddialogflowcxv3intentparameter";
import { GoogleCloudDialogflowCxV3IntentTrainingPhrase } from "./googleclouddialogflowcxv3intenttrainingphrase";



// GoogleCloudDialogflowCxV3Intent
/** 
 * An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.
**/
export class GoogleCloudDialogflowCxV3Intent extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudDialogflowCxV3IntentParameter })
  parameters?: GoogleCloudDialogflowCxV3IntentParameter[];

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=trainingPhrases", elemType: GoogleCloudDialogflowCxV3IntentTrainingPhrase })
  trainingPhrases?: GoogleCloudDialogflowCxV3IntentTrainingPhrase[];
}
