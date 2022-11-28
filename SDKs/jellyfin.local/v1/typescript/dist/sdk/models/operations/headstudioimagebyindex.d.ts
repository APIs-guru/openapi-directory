import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadStudioImageByIndexPathParams extends SpeakeasyBase {
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    name: string;
}
export declare class HeadStudioImageByIndexQueryParams extends SpeakeasyBase {
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
export declare class HeadStudioImageByIndexRequest extends SpeakeasyBase {
    pathParams: HeadStudioImageByIndexPathParams;
    queryParams: HeadStudioImageByIndexQueryParams;
}
export declare class HeadStudioImageByIndexResponse extends SpeakeasyBase {
    contentType: string;
    headStudioImageByIndex200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
