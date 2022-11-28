import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1IntentInput
/** 
 * Represents the intent to trigger programmatically rather than as a result of natural language processing.
**/
export class GoogleCloudDialogflowCxV3beta1IntentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: string;
}
