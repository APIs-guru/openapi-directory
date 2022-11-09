import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2TextInput
/** 
 * ============================================================================ Auxiliary proto messages. Represents the natural language text to be processed.
**/
export class GoogleCloudDialogflowV2TextInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
