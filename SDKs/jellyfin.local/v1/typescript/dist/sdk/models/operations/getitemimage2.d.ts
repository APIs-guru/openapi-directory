import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemImage2PathParams extends SpeakeasyBase {
    format: shared.ImageFormatEnum;
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    itemId: string;
    maxHeight: number;
    maxWidth: number;
    percentPlayed: number;
    tag: string;
    unplayedCount: number;
}
export declare class GetItemImage2QueryParams extends SpeakeasyBase {
    addPlayedIndicator?: boolean;
    backgroundColor?: string;
    blur?: number;
    cropWhitespace?: boolean;
    foregroundLayer?: string;
    height?: number;
    quality?: number;
    width?: number;
}
export declare class GetItemImage2Request extends SpeakeasyBase {
    pathParams: GetItemImage2PathParams;
    queryParams: GetItemImage2QueryParams;
}
export declare class GetItemImage2Response extends SpeakeasyBase {
    contentType: string;
    getItemImage2200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
