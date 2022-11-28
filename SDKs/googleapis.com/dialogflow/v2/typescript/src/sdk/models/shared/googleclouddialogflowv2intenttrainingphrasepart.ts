import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2IntentTrainingPhrasePart
/** 
 * Represents a part of a training phrase.
**/
export class GoogleCloudDialogflowV2IntentTrainingPhrasePart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=entityType" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=userDefined" })
  userDefined?: boolean;
}
