import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentTrainingPhrasePart } from "./googleclouddialogflowv2intenttrainingphrasepart";


export enum GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Example = "EXAMPLE",
    Template = "TEMPLATE"
}


// GoogleCloudDialogflowV2IntentTrainingPhrase
/** 
 * Represents an example that the agent is trained on.
**/
export class GoogleCloudDialogflowV2IntentTrainingPhrase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parts", elemType: GoogleCloudDialogflowV2IntentTrainingPhrasePart })
  parts?: GoogleCloudDialogflowV2IntentTrainingPhrasePart[];

  @SpeakeasyMetadata({ data: "json, name=timesAddedCount" })
  timesAddedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum;
}
