import { SpeakeasyBase } from "../../../internal/utils";
export declare class PagespeedApiFormatStringV2ArgsRects extends SpeakeasyBase {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
}
export declare class PagespeedApiFormatStringV2ArgsSecondaryRects extends SpeakeasyBase {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
}
export declare class PagespeedApiFormatStringV2Args extends SpeakeasyBase {
    key?: string;
    rects?: PagespeedApiFormatStringV2ArgsRects[];
    secondaryRects?: PagespeedApiFormatStringV2ArgsSecondaryRects[];
    type?: string;
    value?: string;
}
export declare class PagespeedApiFormatStringV2 extends SpeakeasyBase {
    args?: PagespeedApiFormatStringV2Args[];
    format?: string;
}
