import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserImagePathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    userId: string;
}
export declare class GetUserImageQueryParams extends SpeakeasyBase {
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
export declare class GetUserImageRequest extends SpeakeasyBase {
    pathParams: GetUserImagePathParams;
    queryParams: GetUserImageQueryParams;
}
export declare class GetUserImageResponse extends SpeakeasyBase {
    contentType: string;
    getUserImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
