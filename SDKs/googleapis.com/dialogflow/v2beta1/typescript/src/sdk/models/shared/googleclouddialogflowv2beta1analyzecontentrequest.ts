import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=assistQueryParams" })
  assistQueryParams?: GoogleCloudDialogflowV2beta1AssistQueryParameters;

  @SpeakeasyMetadata({ data: "json, name=audioInput" })
  audioInput?: GoogleCloudDialogflowV2beta1AudioInput;

  @SpeakeasyMetadata({ data: "json, name=cxCurrentPage" })
  cxCurrentPage?: string;

  @SpeakeasyMetadata({ data: "json, name=cxParameters" })
  cxParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=eventInput" })
  eventInput?: GoogleCloudDialogflowV2beta1EventInput;

  @SpeakeasyMetadata({ data: "json, name=messageSendTime" })
  messageSendTime?: string;

  @SpeakeasyMetadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowV2beta1QueryParameters;

  @SpeakeasyMetadata({ data: "json, name=replyAudioConfig" })
  replyAudioConfig?: GoogleCloudDialogflowV2beta1OutputAudioConfig;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=textInput" })
  textInput?: GoogleCloudDialogflowV2beta1TextInput;
}
