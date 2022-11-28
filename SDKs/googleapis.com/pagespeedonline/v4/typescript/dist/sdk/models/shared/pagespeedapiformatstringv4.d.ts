import { SpeakeasyBase } from "../../../internal/utils";
export declare class PagespeedApiFormatStringV4ArgsRects extends SpeakeasyBase {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
}
export declare class PagespeedApiFormatStringV4ArgsSecondaryRects extends SpeakeasyBase {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
}
export declare class PagespeedApiFormatStringV4Args extends SpeakeasyBase {
    key?: string;
    rects?: PagespeedApiFormatStringV4ArgsRects[];
    secondaryRects?: PagespeedApiFormatStringV4ArgsSecondaryRects[];
    type?: string;
    value?: string;
}
export declare class PagespeedApiFormatStringV4 extends SpeakeasyBase {
    args?: PagespeedApiFormatStringV4Args[];
    format?: string;
}
