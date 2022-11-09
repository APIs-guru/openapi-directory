import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2AssistQueryParameters } from "./googleclouddialogflowv2assistqueryparameters";
import { GoogleCloudDialogflowV2EventInput } from "./googleclouddialogflowv2eventinput";
import { GoogleCloudDialogflowV2QueryParameters } from "./googleclouddialogflowv2queryparameters";
import { GoogleCloudDialogflowV2OutputAudioConfig } from "./googleclouddialogflowv2outputaudioconfig";
import { GoogleCloudDialogflowV2TextInput } from "./googleclouddialogflowv2textinput";


// GoogleCloudDialogflowV2AnalyzeContentRequest
/** 
 * The request message for Participants.AnalyzeContent.
**/
export class GoogleCloudDialogflowV2AnalyzeContentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assistQueryParams" })
  assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;

  @Metadata({ data: "json, name=cxParameters" })
  cxParameters?: Map<string, any>;

  @Metadata({ data: "json, name=eventInput" })
  eventInput?: GoogleCloudDialogflowV2EventInput;

  @Metadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowV2QueryParameters;

  @Metadata({ data: "json, name=replyAudioConfig" })
  replyAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=textInput" })
  textInput?: GoogleCloudDialogflowV2TextInput;
}
