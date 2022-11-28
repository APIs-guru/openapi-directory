import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ActivityContentDetailsPromotedItemCtaTypeEnum {
    CtaTypeUnspecified = "ctaTypeUnspecified",
    VisitAdvertiserSite = "visitAdvertiserSite"
}
/**
 * Details about a resource which is being promoted.
**/
export declare class ActivityContentDetailsPromotedItem extends SpeakeasyBase {
    adTag?: string;
    clickTrackingUrl?: string;
    creativeViewUrl?: string;
    ctaType?: ActivityContentDetailsPromotedItemCtaTypeEnum;
    customCtaButtonText?: string;
    descriptionText?: string;
    destinationUrl?: string;
    forecastingUrl?: string[];
    impressionUrl?: string[];
    videoId?: string;
}
