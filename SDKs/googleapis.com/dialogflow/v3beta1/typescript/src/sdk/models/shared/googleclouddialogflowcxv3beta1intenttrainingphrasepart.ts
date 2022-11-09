import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart
/** 
 * Represents a part of a training phrase.
**/
export class GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameterId" })
  parameterId?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
