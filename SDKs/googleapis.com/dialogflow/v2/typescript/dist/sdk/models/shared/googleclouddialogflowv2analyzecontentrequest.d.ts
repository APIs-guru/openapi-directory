import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AssistQueryParameters } from "./googleclouddialogflowv2assistqueryparameters";
import { GoogleCloudDialogflowV2EventInput } from "./googleclouddialogflowv2eventinput";
import { GoogleCloudDialogflowV2QueryParameters } from "./googleclouddialogflowv2queryparameters";
import { GoogleCloudDialogflowV2OutputAudioConfig } from "./googleclouddialogflowv2outputaudioconfig";
import { GoogleCloudDialogflowV2TextInput } from "./googleclouddialogflowv2textinput";
/**
 * The request message for Participants.AnalyzeContent.
**/
export declare class GoogleCloudDialogflowV2AnalyzeContentRequest extends SpeakeasyBase {
    assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;
    cxParameters?: Map<string, any>;
    eventInput?: GoogleCloudDialogflowV2EventInput;
    queryParams?: GoogleCloudDialogflowV2QueryParameters;
    replyAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;
    requestId?: string;
    textInput?: GoogleCloudDialogflowV2TextInput;
}
