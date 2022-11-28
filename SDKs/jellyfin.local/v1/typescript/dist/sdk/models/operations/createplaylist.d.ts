import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePlaylistQueryParams extends SpeakeasyBase {
    ids?: string[];
    mediaType?: string;
    name?: string;
    userId?: string;
}
export declare class CreatePlaylistRequests extends SpeakeasyBase {
    createPlaylistDto?: shared.CreatePlaylistDto;
    createPlaylistDto1?: shared.CreatePlaylistDto;
    createPlaylistDto2?: shared.CreatePlaylistDto;
}
export declare class CreatePlaylistSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class CreatePlaylistRequest extends SpeakeasyBase {
    queryParams: CreatePlaylistQueryParams;
    request?: CreatePlaylistRequests;
    security: CreatePlaylistSecurity;
}
export declare class CreatePlaylistResponse extends SpeakeasyBase {
    contentType: string;
    playlistCreationResult?: shared.PlaylistCreationResult;
    statusCode: number;
}
