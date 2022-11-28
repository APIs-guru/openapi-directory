import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=assistQueryParams" })
  assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;

  @SpeakeasyMetadata({ data: "json, name=cxParameters" })
  cxParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=eventInput" })
  eventInput?: GoogleCloudDialogflowV2EventInput;

  @SpeakeasyMetadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowV2QueryParameters;

  @SpeakeasyMetadata({ data: "json, name=replyAudioConfig" })
  replyAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=textInput" })
  textInput?: GoogleCloudDialogflowV2TextInput;
}
