import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHlsPlaylistLegacyPathParams extends SpeakeasyBase {
    itemId: string;
    playlistId: string;
}
export declare class GetHlsPlaylistLegacySecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetHlsPlaylistLegacyRequest extends SpeakeasyBase {
    pathParams: GetHlsPlaylistLegacyPathParams;
    security: GetHlsPlaylistLegacySecurity;
}
export declare class GetHlsPlaylistLegacyResponse extends SpeakeasyBase {
    contentType: string;
    getHlsPlaylistLegacy200ApplicationXMpegurlBinaryString?: Uint8Array;
    statusCode: number;
}
