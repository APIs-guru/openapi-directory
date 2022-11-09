import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart } from "./googleclouddialogflowv2beta1intenttrainingphrasepart";

export enum GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Example = "EXAMPLE"
,    Template = "TEMPLATE"
}


// GoogleCloudDialogflowV2beta1IntentTrainingPhrase
/** 
 * Represents an example that the agent is trained on.
**/
export class GoogleCloudDialogflowV2beta1IntentTrainingPhrase extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parts", elemType: shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart })
  parts?: GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart[];

  @Metadata({ data: "json, name=timesAddedCount" })
  timesAddedCount?: number;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum;
}
