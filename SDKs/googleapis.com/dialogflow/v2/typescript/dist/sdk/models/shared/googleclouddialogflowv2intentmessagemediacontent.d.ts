import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject } from "./googleclouddialogflowv2intentmessagemediacontentresponsemediaobject";
export declare enum GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum {
    ResponseMediaTypeUnspecified = "RESPONSE_MEDIA_TYPE_UNSPECIFIED",
    Audio = "AUDIO"
}
/**
 * The media content card for Actions on Google.
**/
export declare class GoogleCloudDialogflowV2IntentMessageMediaContent extends SpeakeasyBase {
    mediaObjects?: GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[];
    mediaType?: GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum;
}
