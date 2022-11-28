import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum {
    HeightUnspecified = "HEIGHT_UNSPECIFIED",
    Short = "SHORT",
    Medium = "MEDIUM",
    Tall = "TALL"
}
/**
 * Rich Business Messaging (RBM) Media displayed in Cards The following media-types are currently supported: Image Types * image/jpeg * image/jpg' * image/gif * image/png Video Types * video/h263 * video/m4v * video/mp4 * video/mpeg * video/mpeg4 * video/webm
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia extends SpeakeasyBase {
    fileUri?: string;
    height?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum;
    thumbnailUri?: string;
}
