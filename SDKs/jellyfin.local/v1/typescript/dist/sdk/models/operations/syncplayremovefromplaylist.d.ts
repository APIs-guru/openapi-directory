import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayRemoveFromPlaylistRequests extends SpeakeasyBase {
    removeFromPlaylistRequestDto?: shared.RemoveFromPlaylistRequestDto;
    removeFromPlaylistRequestDto1?: shared.RemoveFromPlaylistRequestDto;
    removeFromPlaylistRequestDto2?: shared.RemoveFromPlaylistRequestDto;
}
export declare class SyncPlayRemoveFromPlaylistSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayRemoveFromPlaylistRequest extends SpeakeasyBase {
    request: SyncPlayRemoveFromPlaylistRequests;
    security: SyncPlayRemoveFromPlaylistSecurity;
}
export declare class SyncPlayRemoveFromPlaylistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
