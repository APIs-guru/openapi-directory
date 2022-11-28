import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveFromPlaylistPathParams extends SpeakeasyBase {
    playlistId: string;
}
export declare class RemoveFromPlaylistQueryParams extends SpeakeasyBase {
    entryIds?: string[];
}
export declare class RemoveFromPlaylistSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class RemoveFromPlaylistRequest extends SpeakeasyBase {
    pathParams: RemoveFromPlaylistPathParams;
    queryParams: RemoveFromPlaylistQueryParams;
    security: RemoveFromPlaylistSecurity;
}
export declare class RemoveFromPlaylistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
