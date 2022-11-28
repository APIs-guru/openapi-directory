import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlaySetPlaylistItemRequests extends SpeakeasyBase {
    setPlaylistItemRequestDto?: shared.SetPlaylistItemRequestDto;
    setPlaylistItemRequestDto1?: shared.SetPlaylistItemRequestDto;
    setPlaylistItemRequestDto2?: shared.SetPlaylistItemRequestDto;
}
export declare class SyncPlaySetPlaylistItemSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlaySetPlaylistItemRequest extends SpeakeasyBase {
    request: SyncPlaySetPlaylistItemRequests;
    security: SyncPlaySetPlaylistItemSecurity;
}
export declare class SyncPlaySetPlaylistItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
