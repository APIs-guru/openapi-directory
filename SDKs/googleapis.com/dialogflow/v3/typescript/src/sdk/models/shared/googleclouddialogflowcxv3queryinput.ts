import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3AudioInput } from "./googleclouddialogflowcxv3audioinput";
import { GoogleCloudDialogflowCxV3DtmfInput } from "./googleclouddialogflowcxv3dtmfinput";
import { GoogleCloudDialogflowCxV3EventInput } from "./googleclouddialogflowcxv3eventinput";
import { GoogleCloudDialogflowCxV3IntentInput } from "./googleclouddialogflowcxv3intentinput";
import { GoogleCloudDialogflowCxV3TextInput } from "./googleclouddialogflowcxv3textinput";


// GoogleCloudDialogflowCxV3QueryInput
/** 
 * Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered. 
**/
export class GoogleCloudDialogflowCxV3QueryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio" })
  audio?: GoogleCloudDialogflowCxV3AudioInput;

  @Metadata({ data: "json, name=dtmf" })
  dtmf?: GoogleCloudDialogflowCxV3DtmfInput;

  @Metadata({ data: "json, name=event" })
  event?: GoogleCloudDialogflowCxV3EventInput;

  @Metadata({ data: "json, name=intent" })
  intent?: GoogleCloudDialogflowCxV3IntentInput;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=text" })
  text?: GoogleCloudDialogflowCxV3TextInput;
}
