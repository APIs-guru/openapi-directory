import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadArtistImagePathParams extends SpeakeasyBase {
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    name: string;
}
export declare class HeadArtistImageQueryParams extends SpeakeasyBase {
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
export declare class HeadArtistImageRequest extends SpeakeasyBase {
    pathParams: HeadArtistImagePathParams;
    queryParams: HeadArtistImageQueryParams;
}
export declare class HeadArtistImageResponse extends SpeakeasyBase {
    contentType: string;
    headArtistImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
