import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ActivityContentDetailsPromotedItemCtaTypeEnum {
    CtaTypeUnspecified = "ctaTypeUnspecified"
,    VisitAdvertiserSite = "visitAdvertiserSite"
}


// ActivityContentDetailsPromotedItem
/** 
 * Details about a resource which is being promoted.
**/
export class ActivityContentDetailsPromotedItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=adTag" })
  adTag?: string;

  @Metadata({ data: "json, name=clickTrackingUrl" })
  clickTrackingUrl?: string;

  @Metadata({ data: "json, name=creativeViewUrl" })
  creativeViewUrl?: string;

  @Metadata({ data: "json, name=ctaType" })
  ctaType?: ActivityContentDetailsPromotedItemCtaTypeEnum;

  @Metadata({ data: "json, name=customCtaButtonText" })
  customCtaButtonText?: string;

  @Metadata({ data: "json, name=descriptionText" })
  descriptionText?: string;

  @Metadata({ data: "json, name=destinationUrl" })
  destinationUrl?: string;

  @Metadata({ data: "json, name=forecastingUrl" })
  forecastingUrl?: string[];

  @Metadata({ data: "json, name=impressionUrl" })
  impressionUrl?: string[];

  @Metadata({ data: "json, name=videoId" })
  videoId?: string;
}
