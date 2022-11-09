import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2IntentTrainingPhrasePart } from "./googleclouddialogflowv2intenttrainingphrasepart";

export enum GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Example = "EXAMPLE"
,    Template = "TEMPLATE"
}


// GoogleCloudDialogflowV2IntentTrainingPhrase
/** 
 * Represents an example that the agent is trained on.
**/
export class GoogleCloudDialogflowV2IntentTrainingPhrase extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parts", elemType: shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart })
  parts?: GoogleCloudDialogflowV2IntentTrainingPhrasePart[];

  @Metadata({ data: "json, name=timesAddedCount" })
  timesAddedCount?: number;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum;
}
