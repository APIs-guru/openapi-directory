import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserImageByIndexPathParams extends SpeakeasyBase {
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    userId: string;
}
export declare class GetUserImageByIndexQueryParams extends SpeakeasyBase {
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
export declare class GetUserImageByIndexRequest extends SpeakeasyBase {
    pathParams: GetUserImageByIndexPathParams;
    queryParams: GetUserImageByIndexQueryParams;
}
export declare class GetUserImageByIndexResponse extends SpeakeasyBase {
    contentType: string;
    getUserImageByIndex200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
