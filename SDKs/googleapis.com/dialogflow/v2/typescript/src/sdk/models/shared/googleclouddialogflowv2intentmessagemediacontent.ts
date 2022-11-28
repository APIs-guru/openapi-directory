import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject } from "./googleclouddialogflowv2intentmessagemediacontentresponsemediaobject";


export enum GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum {
    ResponseMediaTypeUnspecified = "RESPONSE_MEDIA_TYPE_UNSPECIFIED",
    Audio = "AUDIO"
}


// GoogleCloudDialogflowV2IntentMessageMediaContent
/** 
 * The media content card for Actions on Google.
**/
export class GoogleCloudDialogflowV2IntentMessageMediaContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mediaObjects", elemType: GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject })
  mediaObjects?: GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[];

  @SpeakeasyMetadata({ data: "json, name=mediaType" })
  mediaType?: GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum;
}
