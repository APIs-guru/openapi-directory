import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ActivityContentDetailsPromotedItemCtaTypeEnum {
    CtaTypeUnspecified = "ctaTypeUnspecified",
    VisitAdvertiserSite = "visitAdvertiserSite"
}


// ActivityContentDetailsPromotedItem
/** 
 * Details about a resource which is being promoted.
**/
export class ActivityContentDetailsPromotedItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adTag" })
  adTag?: string;

  @SpeakeasyMetadata({ data: "json, name=clickTrackingUrl" })
  clickTrackingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=creativeViewUrl" })
  creativeViewUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ctaType" })
  ctaType?: ActivityContentDetailsPromotedItemCtaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=customCtaButtonText" })
  customCtaButtonText?: string;

  @SpeakeasyMetadata({ data: "json, name=descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationUrl" })
  destinationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=forecastingUrl" })
  forecastingUrl?: string[];

  @SpeakeasyMetadata({ data: "json, name=impressionUrl" })
  impressionUrl?: string[];

  @SpeakeasyMetadata({ data: "json, name=videoId" })
  videoId?: string;
}
