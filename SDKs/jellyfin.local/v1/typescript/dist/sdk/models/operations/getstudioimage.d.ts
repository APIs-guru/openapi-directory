import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStudioImagePathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    name: string;
}
export declare class GetStudioImageQueryParams extends SpeakeasyBase {
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
export declare class GetStudioImageRequest extends SpeakeasyBase {
    pathParams: GetStudioImagePathParams;
    queryParams: GetStudioImageQueryParams;
}
export declare class GetStudioImageResponse extends SpeakeasyBase {
    contentType: string;
    getStudioImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
