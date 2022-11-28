import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadPersonImageByIndexPathParams extends SpeakeasyBase {
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    name: string;
}
export declare class HeadPersonImageByIndexQueryParams extends SpeakeasyBase {
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
export declare class HeadPersonImageByIndexRequest extends SpeakeasyBase {
    pathParams: HeadPersonImageByIndexPathParams;
    queryParams: HeadPersonImageByIndexQueryParams;
}
export declare class HeadPersonImageByIndexResponse extends SpeakeasyBase {
    contentType: string;
    headPersonImageByIndex200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
