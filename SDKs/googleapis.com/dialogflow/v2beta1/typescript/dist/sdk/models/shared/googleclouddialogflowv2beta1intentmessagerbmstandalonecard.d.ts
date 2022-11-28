import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent } from "./googleclouddialogflowv2beta1intentmessagerbmcardcontent";
export declare enum GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum {
    CardOrientationUnspecified = "CARD_ORIENTATION_UNSPECIFIED",
    Horizontal = "HORIZONTAL",
    Vertical = "VERTICAL"
}
export declare enum GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum {
    ThumbnailImageAlignmentUnspecified = "THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED",
    Left = "LEFT",
    Right = "RIGHT"
}
/**
 * Standalone Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout.
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard extends SpeakeasyBase {
    cardContent?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent;
    cardOrientation?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum;
    thumbnailImageAlignment?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum;
}
