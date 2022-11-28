import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart } from "./googleclouddialogflowcxv3beta1intenttrainingphrasepart";



// GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase
/** 
 * Represents an example that the agent is trained on to identify the intent.
**/
export class GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=parts", elemType: GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart })
  parts?: GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart[];

  @SpeakeasyMetadata({ data: "json, name=repeatCount" })
  repeatCount?: number;
}
