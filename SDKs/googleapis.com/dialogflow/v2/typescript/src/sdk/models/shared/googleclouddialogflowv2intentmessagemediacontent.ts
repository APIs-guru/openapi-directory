import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject } from "./googleclouddialogflowv2intentmessagemediacontentresponsemediaobject";

export enum GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum {
    ResponseMediaTypeUnspecified = "RESPONSE_MEDIA_TYPE_UNSPECIFIED"
,    Audio = "AUDIO"
}


// GoogleCloudDialogflowV2IntentMessageMediaContent
/** 
 * The media content card for Actions on Google.
**/
export class GoogleCloudDialogflowV2IntentMessageMediaContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=mediaObjects", elemType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject })
  mediaObjects?: GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[];

  @Metadata({ data: "json, name=mediaType" })
  mediaType?: GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum;
}
