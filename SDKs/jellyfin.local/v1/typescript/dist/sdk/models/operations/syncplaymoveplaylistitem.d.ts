import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayMovePlaylistItemRequests extends SpeakeasyBase {
    movePlaylistItemRequestDto?: shared.MovePlaylistItemRequestDto;
    movePlaylistItemRequestDto1?: shared.MovePlaylistItemRequestDto;
    movePlaylistItemRequestDto2?: shared.MovePlaylistItemRequestDto;
}
export declare class SyncPlayMovePlaylistItemSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayMovePlaylistItemRequest extends SpeakeasyBase {
    request: SyncPlayMovePlaylistItemRequests;
    security: SyncPlayMovePlaylistItemSecurity;
}
export declare class SyncPlayMovePlaylistItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
