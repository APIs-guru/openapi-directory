import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1AssistQueryParameters } from "./googleclouddialogflowv2beta1assistqueryparameters";
import { GoogleCloudDialogflowV2beta1AudioInput } from "./googleclouddialogflowv2beta1audioinput";
import { GoogleCloudDialogflowV2beta1EventInput } from "./googleclouddialogflowv2beta1eventinput";
import { GoogleCloudDialogflowV2beta1QueryParameters } from "./googleclouddialogflowv2beta1queryparameters";
import { GoogleCloudDialogflowV2beta1OutputAudioConfig } from "./googleclouddialogflowv2beta1outputaudioconfig";
import { GoogleCloudDialogflowV2beta1TextInput } from "./googleclouddialogflowv2beta1textinput";


// GoogleCloudDialogflowV2beta1AnalyzeContentRequest
/** 
 * The request message for Participants.AnalyzeContent.
**/
export class GoogleCloudDialogflowV2beta1AnalyzeContentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assistQueryParams" })
  assistQueryParams?: GoogleCloudDialogflowV2beta1AssistQueryParameters;

  @Metadata({ data: "json, name=audioInput" })
  audioInput?: GoogleCloudDialogflowV2beta1AudioInput;

  @Metadata({ data: "json, name=cxCurrentPage" })
  cxCurrentPage?: string;

  @Metadata({ data: "json, name=cxParameters" })
  cxParameters?: Map<string, any>;

  @Metadata({ data: "json, name=eventInput" })
  eventInput?: GoogleCloudDialogflowV2beta1EventInput;

  @Metadata({ data: "json, name=messageSendTime" })
  messageSendTime?: string;

  @Metadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowV2beta1QueryParameters;

  @Metadata({ data: "json, name=replyAudioConfig" })
  replyAudioConfig?: GoogleCloudDialogflowV2beta1OutputAudioConfig;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=textInput" })
  textInput?: GoogleCloudDialogflowV2beta1TextInput;
}
