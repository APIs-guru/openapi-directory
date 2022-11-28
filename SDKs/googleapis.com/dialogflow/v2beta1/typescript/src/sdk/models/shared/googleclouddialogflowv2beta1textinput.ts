import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1TextInput
/** 
 * Represents the natural language text to be processed.
**/
export class GoogleCloudDialogflowV2beta1TextInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
