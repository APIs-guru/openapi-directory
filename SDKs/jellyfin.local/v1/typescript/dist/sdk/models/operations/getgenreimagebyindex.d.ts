import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenreImageByIndexPathParams extends SpeakeasyBase {
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    name: string;
}
export declare class GetGenreImageByIndexQueryParams extends SpeakeasyBase {
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
export declare class GetGenreImageByIndexRequest extends SpeakeasyBase {
    pathParams: GetGenreImageByIndexPathParams;
    queryParams: GetGenreImageByIndexQueryParams;
}
export declare class GetGenreImageByIndexResponse extends SpeakeasyBase {
    contentType: string;
    getGenreImageByIndex200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
