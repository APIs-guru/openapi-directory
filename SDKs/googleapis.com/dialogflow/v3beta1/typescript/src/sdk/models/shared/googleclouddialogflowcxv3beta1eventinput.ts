import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1EventInput
/** 
 * Represents the event to trigger.
**/
export class GoogleCloudDialogflowCxV3beta1EventInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: string;
}
