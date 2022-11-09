import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart } from "./googleclouddialogflowcxv3beta1intenttrainingphrasepart";


// GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase
/** 
 * Represents an example that the agent is trained on to identify the intent.
**/
export class GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=parts", elemType: shared.GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart })
  parts?: GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart[];

  @Metadata({ data: "json, name=repeatCount" })
  repeatCount?: number;
}
