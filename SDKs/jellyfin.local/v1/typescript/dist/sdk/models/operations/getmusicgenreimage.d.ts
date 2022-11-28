import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMusicGenreImagePathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    name: string;
}
export declare class GetMusicGenreImageQueryParams extends SpeakeasyBase {
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
export declare class GetMusicGenreImageRequest extends SpeakeasyBase {
    pathParams: GetMusicGenreImagePathParams;
    queryParams: GetMusicGenreImageQueryParams;
}
export declare class GetMusicGenreImageResponse extends SpeakeasyBase {
    contentType: string;
    getMusicGenreImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
