import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject } from "./googleclouddialogflowv2beta1intentmessagemediacontentresponsemediaobject";


export enum GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum {
    ResponseMediaTypeUnspecified = "RESPONSE_MEDIA_TYPE_UNSPECIFIED",
    Audio = "AUDIO"
}


// GoogleCloudDialogflowV2beta1IntentMessageMediaContent
/** 
 * The media content card for Actions on Google.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageMediaContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mediaObjects", elemType: GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject })
  mediaObjects?: GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject[];

  @SpeakeasyMetadata({ data: "json, name=mediaType" })
  mediaType?: GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum;
}
