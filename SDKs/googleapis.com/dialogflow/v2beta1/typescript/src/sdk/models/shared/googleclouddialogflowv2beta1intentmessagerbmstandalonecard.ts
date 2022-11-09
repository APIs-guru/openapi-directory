import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent } from "./googleclouddialogflowv2beta1intentmessagerbmcardcontent";

export enum GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum {
    CardOrientationUnspecified = "CARD_ORIENTATION_UNSPECIFIED"
,    Horizontal = "HORIZONTAL"
,    Vertical = "VERTICAL"
}

export enum GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum {
    ThumbnailImageAlignmentUnspecified = "THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED"
,    Left = "LEFT"
,    Right = "RIGHT"
}


// GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard
/** 
 * Standalone Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=cardContent" })
  cardContent?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent;

  @Metadata({ data: "json, name=cardOrientation" })
  cardOrientation?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum;

  @Metadata({ data: "json, name=thumbnailImageAlignment" })
  thumbnailImageAlignment?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum;
}
