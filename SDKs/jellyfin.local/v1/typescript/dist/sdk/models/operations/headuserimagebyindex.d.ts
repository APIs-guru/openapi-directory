import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadUserImageByIndexPathParams extends SpeakeasyBase {
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    userId: string;
}
export declare class HeadUserImageByIndexQueryParams extends SpeakeasyBase {
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
export declare class HeadUserImageByIndexRequest extends SpeakeasyBase {
    pathParams: HeadUserImageByIndexPathParams;
    queryParams: HeadUserImageByIndexQueryParams;
}
export declare class HeadUserImageByIndexResponse extends SpeakeasyBase {
    contentType: string;
    headUserImageByIndex200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
