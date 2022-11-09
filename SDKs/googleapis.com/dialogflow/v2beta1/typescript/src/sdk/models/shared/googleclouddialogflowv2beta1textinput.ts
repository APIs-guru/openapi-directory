import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1TextInput
/** 
 * Represents the natural language text to be processed.
**/
export class GoogleCloudDialogflowV2beta1TextInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
