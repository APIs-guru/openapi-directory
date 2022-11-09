import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3IntentTrainingPhrasePart } from "./googleclouddialogflowcxv3intenttrainingphrasepart";


// GoogleCloudDialogflowCxV3IntentTrainingPhrase
/** 
 * Represents an example that the agent is trained on to identify the intent.
**/
export class GoogleCloudDialogflowCxV3IntentTrainingPhrase extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=parts", elemType: shared.GoogleCloudDialogflowCxV3IntentTrainingPhrasePart })
  parts?: GoogleCloudDialogflowCxV3IntentTrainingPhrasePart[];

  @Metadata({ data: "json, name=repeatCount" })
  repeatCount?: number;
}
