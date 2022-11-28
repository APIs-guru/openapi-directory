import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The region of the page that is captured by this image, with dimensions measured in CSS pixels.
**/
export declare class PagespeedApiImageV2PageRect extends SpeakeasyBase {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
}
export declare class PagespeedApiImageV2 extends SpeakeasyBase {
    data?: string;
    height?: number;
    key?: string;
    mimeType?: string;
    pageRect?: PagespeedApiImageV2PageRect;
    width?: number;
}
