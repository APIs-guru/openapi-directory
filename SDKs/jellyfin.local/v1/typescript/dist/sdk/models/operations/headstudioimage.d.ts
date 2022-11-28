import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadStudioImagePathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    name: string;
}
export declare class HeadStudioImageQueryParams extends SpeakeasyBase {
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
export declare class HeadStudioImageRequest extends SpeakeasyBase {
    pathParams: HeadStudioImagePathParams;
    queryParams: HeadStudioImageQueryParams;
}
export declare class HeadStudioImageResponse extends SpeakeasyBase {
    contentType: string;
    headStudioImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
