import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1IntentParameter } from "./googleclouddialogflowcxv3beta1intentparameter";
import { GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase } from "./googleclouddialogflowcxv3beta1intenttrainingphrase";


// GoogleCloudDialogflowCxV3beta1Intent
/** 
 * An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.
**/
export class GoogleCloudDialogflowCxV3beta1Intent extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=isFallback" })
  isFallback?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.GoogleCloudDialogflowCxV3beta1IntentParameter })
  parameters?: GoogleCloudDialogflowCxV3beta1IntentParameter[];

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=trainingPhrases", elemType: shared.GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase })
  trainingPhrases?: GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase[];
}
