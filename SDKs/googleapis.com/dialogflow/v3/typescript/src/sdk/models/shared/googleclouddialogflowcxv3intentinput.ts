import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3IntentInput
/** 
 * Represents the intent to trigger programmatically rather than as a result of natural language processing.
**/
export class GoogleCloudDialogflowCxV3IntentInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=intent" })
  intent?: string;
}
