import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3TextInput
/** 
 * Represents the natural language text to be processed.
**/
export class GoogleCloudDialogflowCxV3TextInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
