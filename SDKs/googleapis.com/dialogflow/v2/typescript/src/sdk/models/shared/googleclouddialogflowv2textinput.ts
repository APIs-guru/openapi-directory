import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2TextInput
/** 
 * ============================================================================ Auxiliary proto messages. Represents the natural language text to be processed.
**/
export class GoogleCloudDialogflowV2TextInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
