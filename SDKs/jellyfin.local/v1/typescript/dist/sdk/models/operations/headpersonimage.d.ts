import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadPersonImagePathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    name: string;
}
export declare class HeadPersonImageQueryParams extends SpeakeasyBase {
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
export declare class HeadPersonImageRequest extends SpeakeasyBase {
    pathParams: HeadPersonImagePathParams;
    queryParams: HeadPersonImageQueryParams;
}
export declare class HeadPersonImageResponse extends SpeakeasyBase {
    contentType: string;
    headPersonImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
