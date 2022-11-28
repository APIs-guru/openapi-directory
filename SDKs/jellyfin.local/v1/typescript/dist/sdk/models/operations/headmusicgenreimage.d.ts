import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadMusicGenreImagePathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    name: string;
}
export declare class HeadMusicGenreImageQueryParams extends SpeakeasyBase {
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
export declare class HeadMusicGenreImageRequest extends SpeakeasyBase {
    pathParams: HeadMusicGenreImagePathParams;
    queryParams: HeadMusicGenreImageQueryParams;
}
export declare class HeadMusicGenreImageResponse extends SpeakeasyBase {
    contentType: string;
    headMusicGenreImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
