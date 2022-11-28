import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3IntentTrainingPhrasePart } from "./googleclouddialogflowcxv3intenttrainingphrasepart";



// GoogleCloudDialogflowCxV3IntentTrainingPhrase
/** 
 * Represents an example that the agent is trained on to identify the intent.
**/
export class GoogleCloudDialogflowCxV3IntentTrainingPhrase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=parts", elemType: GoogleCloudDialogflowCxV3IntentTrainingPhrasePart })
  parts?: GoogleCloudDialogflowCxV3IntentTrainingPhrasePart[];

  @SpeakeasyMetadata({ data: "json, name=repeatCount" })
  repeatCount?: number;
}
