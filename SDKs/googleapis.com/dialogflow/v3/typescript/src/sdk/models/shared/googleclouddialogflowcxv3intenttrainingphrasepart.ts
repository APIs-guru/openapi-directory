import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3IntentTrainingPhrasePart
/** 
 * Represents a part of a training phrase.
**/
export class GoogleCloudDialogflowCxV3IntentTrainingPhrasePart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameterId" })
  parameterId?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
