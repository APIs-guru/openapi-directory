import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3EventInput
/** 
 * Represents the event to trigger.
**/
export class GoogleCloudDialogflowCxV3EventInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: string;
}
