import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart } from "./googleclouddialogflowv2beta1intenttrainingphrasepart";


export enum GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Example = "EXAMPLE",
    Template = "TEMPLATE"
}


// GoogleCloudDialogflowV2beta1IntentTrainingPhrase
/** 
 * Represents an example that the agent is trained on.
**/
export class GoogleCloudDialogflowV2beta1IntentTrainingPhrase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parts", elemType: GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart })
  parts?: GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart[];

  @SpeakeasyMetadata({ data: "json, name=timesAddedCount" })
  timesAddedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum;
}
