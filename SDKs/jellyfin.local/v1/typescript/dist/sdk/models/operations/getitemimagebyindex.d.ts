import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemImageByIndexPathParams extends SpeakeasyBase {
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    itemId: string;
}
export declare class GetItemImageByIndexQueryParams extends SpeakeasyBase {
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
export declare class GetItemImageByIndexRequest extends SpeakeasyBase {
    pathParams: GetItemImageByIndexPathParams;
    queryParams: GetItemImageByIndexQueryParams;
}
export declare class GetItemImageByIndexResponse extends SpeakeasyBase {
    contentType: string;
    getItemImageByIndex200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
