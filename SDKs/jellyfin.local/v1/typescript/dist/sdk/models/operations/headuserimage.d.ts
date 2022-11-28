import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadUserImagePathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    userId: string;
}
export declare class HeadUserImageQueryParams extends SpeakeasyBase {
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
export declare class HeadUserImageRequest extends SpeakeasyBase {
    pathParams: HeadUserImagePathParams;
    queryParams: HeadUserImageQueryParams;
}
export declare class HeadUserImageResponse extends SpeakeasyBase {
    contentType: string;
    headUserImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
