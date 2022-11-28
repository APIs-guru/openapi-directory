import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadItemImagePathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    itemId: string;
}
export declare class HeadItemImageQueryParams extends SpeakeasyBase {
    addPlayedIndicator?: boolean;
    backgroundColor?: string;
    blur?: number;
    cropWhitespace?: boolean;
    foregroundLayer?: string;
    format?: shared.ImageFormatEnum;
    height?: number;
    imageIndex?: number;
    maxHeight?: number;
    maxWidth?: number;
    percentPlayed?: number;
    quality?: number;
    tag?: string;
    unplayedCount?: number;
    width?: number;
}
export declare class HeadItemImageRequest extends SpeakeasyBase {
    pathParams: HeadItemImagePathParams;
    queryParams: HeadItemImageQueryParams;
}
export declare class HeadItemImageResponse extends SpeakeasyBase {
    contentType: string;
    headItemImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
