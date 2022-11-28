import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum {
    HeightUnspecified = "HEIGHT_UNSPECIFIED",
    Short = "SHORT",
    Medium = "MEDIUM",
    Tall = "TALL"
}


// GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia
/** 
 * Rich Business Messaging (RBM) Media displayed in Cards The following media-types are currently supported: Image Types * image/jpeg * image/jpg' * image/gif * image/png Video Types * video/h263 * video/m4v * video/mp4 * video/mpeg * video/mpeg4 * video/webm
**/
export class GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileUri" })
  fileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUri" })
  thumbnailUri?: string;
}
