import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadGenreImageByIndexPathParams extends SpeakeasyBase {
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    name: string;
}
export declare class HeadGenreImageByIndexQueryParams extends SpeakeasyBase {
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
export declare class HeadGenreImageByIndexRequest extends SpeakeasyBase {
    pathParams: HeadGenreImageByIndexPathParams;
    queryParams: HeadGenreImageByIndexQueryParams;
}
export declare class HeadGenreImageByIndexResponse extends SpeakeasyBase {
    contentType: string;
    headGenreImageByIndex200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
