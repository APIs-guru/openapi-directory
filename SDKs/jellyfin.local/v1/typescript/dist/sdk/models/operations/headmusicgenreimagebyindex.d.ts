import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadMusicGenreImageByIndexPathParams extends SpeakeasyBase {
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    name: string;
}
export declare class HeadMusicGenreImageByIndexQueryParams extends SpeakeasyBase {
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
export declare class HeadMusicGenreImageByIndexRequest extends SpeakeasyBase {
    pathParams: HeadMusicGenreImageByIndexPathParams;
    queryParams: HeadMusicGenreImageByIndexQueryParams;
}
export declare class HeadMusicGenreImageByIndexResponse extends SpeakeasyBase {
    contentType: string;
    headMusicGenreImageByIndex200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
