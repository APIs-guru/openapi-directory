import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3IntentTrainingPhrasePart
/** 
 * Represents a part of a training phrase.
**/
export class GoogleCloudDialogflowCxV3IntentTrainingPhrasePart extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameterId" })
  parameterId?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
