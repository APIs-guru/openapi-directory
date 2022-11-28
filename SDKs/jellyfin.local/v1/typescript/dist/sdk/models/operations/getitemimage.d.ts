import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemImagePathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    itemId: string;
}
export declare class GetItemImageQueryParams extends SpeakeasyBase {
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
export declare class GetItemImageRequest extends SpeakeasyBase {
    pathParams: GetItemImagePathParams;
    queryParams: GetItemImageQueryParams;
}
export declare class GetItemImageResponse extends SpeakeasyBase {
    contentType: string;
    getItemImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
