import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadItemImage2PathParams extends SpeakeasyBase {
    format: shared.ImageFormatEnum;
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    itemId: string;
    maxHeight: number;
    maxWidth: number;
    percentPlayed: number;
    tag: string;
    unplayedCount: number;
}
export declare class HeadItemImage2QueryParams extends SpeakeasyBase {
    addPlayedIndicator?: boolean;
    backgroundColor?: string;
    blur?: number;
    cropWhitespace?: boolean;
    foregroundLayer?: string;
    height?: number;
    quality?: number;
    width?: number;
}
export declare class HeadItemImage2Request extends SpeakeasyBase {
    pathParams: HeadItemImage2PathParams;
    queryParams: HeadItemImage2QueryParams;
}
export declare class HeadItemImage2Response extends SpeakeasyBase {
    contentType: string;
    headItemImage2200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
