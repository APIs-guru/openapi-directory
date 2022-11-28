import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1TextInput
/** 
 * Represents the natural language text to be processed.
**/
export class GoogleCloudDialogflowCxV3beta1TextInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
