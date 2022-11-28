import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadItemImageByIndexPathParams extends SpeakeasyBase {
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    itemId: string;
}
export declare class HeadItemImageByIndexQueryParams extends SpeakeasyBase {
    addPlayedIndicator?: boolean;
    backgroundColor?: string;
    blur?: number;
    cropWhitespace?: boolean;
    foregroundLayer?: string;
    format?: shared.ImageFormatEnum;
    height?: number;
    maxHeight?: number;
    maxWidth?: number;
    percentPlayed?: number;
    quality?: number;
    tag?: string;
    unplayedCount?: number;
    width?: number;
}
export declare class HeadItemImageByIndexRequest extends SpeakeasyBase {
    pathParams: HeadItemImageByIndexPathParams;
    queryParams: HeadItemImageByIndexQueryParams;
}
export declare class HeadItemImageByIndexResponse extends SpeakeasyBase {
    contentType: string;
    headItemImageByIndex200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
