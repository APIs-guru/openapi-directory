import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1AudioInput } from "./googleclouddialogflowcxv3beta1audioinput";
import { GoogleCloudDialogflowCxV3beta1DtmfInput } from "./googleclouddialogflowcxv3beta1dtmfinput";
import { GoogleCloudDialogflowCxV3beta1EventInput } from "./googleclouddialogflowcxv3beta1eventinput";
import { GoogleCloudDialogflowCxV3beta1IntentInput } from "./googleclouddialogflowcxv3beta1intentinput";
import { GoogleCloudDialogflowCxV3beta1TextInput } from "./googleclouddialogflowcxv3beta1textinput";
/**
 * Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered.
**/
export declare class GoogleCloudDialogflowCxV3beta1QueryInput extends SpeakeasyBase {
    audio?: GoogleCloudDialogflowCxV3beta1AudioInput;
    dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;
    event?: GoogleCloudDialogflowCxV3beta1EventInput;
    intent?: GoogleCloudDialogflowCxV3beta1IntentInput;
    languageCode?: string;
    text?: GoogleCloudDialogflowCxV3beta1TextInput;
}
