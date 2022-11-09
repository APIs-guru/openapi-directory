import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent } from "./googleclouddialogflowv2beta1intentmessagerbmcardcontent";

export enum GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum {
    CardWidthUnspecified = "CARD_WIDTH_UNSPECIFIED"
,    Small = "SMALL"
,    Medium = "MEDIUM"
}


// GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard
/** 
 * Carousel Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=cardContents", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent })
  cardContents?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent[];

  @Metadata({ data: "json, name=cardWidth" })
  cardWidth?: GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum;
}
