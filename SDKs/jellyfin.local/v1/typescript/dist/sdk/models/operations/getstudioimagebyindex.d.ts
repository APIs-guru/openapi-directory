import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStudioImageByIndexPathParams extends SpeakeasyBase {
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    name: string;
}
export declare class GetStudioImageByIndexQueryParams extends SpeakeasyBase {
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
export declare class GetStudioImageByIndexRequest extends SpeakeasyBase {
    pathParams: GetStudioImageByIndexPathParams;
    queryParams: GetStudioImageByIndexQueryParams;
}
export declare class GetStudioImageByIndexResponse extends SpeakeasyBase {
    contentType: string;
    getStudioImageByIndex200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
