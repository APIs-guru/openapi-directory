import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadGenreImagePathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    name: string;
}
export declare class HeadGenreImageQueryParams extends SpeakeasyBase {
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
export declare class HeadGenreImageRequest extends SpeakeasyBase {
    pathParams: HeadGenreImagePathParams;
    queryParams: HeadGenreImageQueryParams;
}
export declare class HeadGenreImageResponse extends SpeakeasyBase {
    contentType: string;
    headGenreImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
