import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
/**
 * Native content for a creative.
**/
export declare class NativeContent extends SpeakeasyBase {
    advertiserName?: string;
    appIcon?: Image;
    body?: string;
    callToAction?: string;
    clickLinkUrl?: string;
    clickTrackingUrl?: string;
    headline?: string;
    image?: Image;
    logo?: Image;
    priceDisplayText?: string;
    starRating?: number;
    videoUrl?: string;
    videoVastXml?: string;
}
