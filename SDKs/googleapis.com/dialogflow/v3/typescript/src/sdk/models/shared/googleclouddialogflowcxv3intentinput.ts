import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3IntentInput
/** 
 * Represents the intent to trigger programmatically rather than as a result of natural language processing.
**/
export class GoogleCloudDialogflowCxV3IntentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: string;
}
