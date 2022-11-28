import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Block object belonging to a promotion.
**/
export declare class PromotionBodyLines extends SpeakeasyBase {
    htmlTitle?: string;
    link?: string;
    title?: string;
    url?: string;
}
/**
 * Image belonging to a promotion.
**/
export declare class PromotionImage extends SpeakeasyBase {
    height?: number;
    source?: string;
    width?: number;
}
/**
 * Promotion result.
**/
export declare class Promotion extends SpeakeasyBase {
    bodyLines?: PromotionBodyLines[];
    displayLink?: string;
    htmlTitle?: string;
    image?: PromotionImage;
    link?: string;
    title?: string;
}
