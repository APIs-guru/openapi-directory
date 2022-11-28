import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3AudioInput } from "./googleclouddialogflowcxv3audioinput";
import { GoogleCloudDialogflowCxV3DtmfInput } from "./googleclouddialogflowcxv3dtmfinput";
import { GoogleCloudDialogflowCxV3EventInput } from "./googleclouddialogflowcxv3eventinput";
import { GoogleCloudDialogflowCxV3IntentInput } from "./googleclouddialogflowcxv3intentinput";
import { GoogleCloudDialogflowCxV3TextInput } from "./googleclouddialogflowcxv3textinput";
/**
 * Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered.
**/
export declare class GoogleCloudDialogflowCxV3QueryInput extends SpeakeasyBase {
    audio?: GoogleCloudDialogflowCxV3AudioInput;
    dtmf?: GoogleCloudDialogflowCxV3DtmfInput;
    event?: GoogleCloudDialogflowCxV3EventInput;
    intent?: GoogleCloudDialogflowCxV3IntentInput;
    languageCode?: string;
    text?: GoogleCloudDialogflowCxV3TextInput;
}
