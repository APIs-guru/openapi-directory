import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubtitlePlaylistPathParams extends SpeakeasyBase {
    index: number;
    itemId: string;
    mediaSourceId: string;
}
export declare class GetSubtitlePlaylistQueryParams extends SpeakeasyBase {
    segmentLength: number;
}
export declare class GetSubtitlePlaylistSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSubtitlePlaylistRequest extends SpeakeasyBase {
    pathParams: GetSubtitlePlaylistPathParams;
    queryParams: GetSubtitlePlaylistQueryParams;
    security: GetSubtitlePlaylistSecurity;
}
export declare class GetSubtitlePlaylistResponse extends SpeakeasyBase {
    contentType: string;
    getSubtitlePlaylist200ApplicationXMpegurlBinaryString?: Uint8Array;
    statusCode: number;
}
