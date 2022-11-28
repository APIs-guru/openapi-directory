import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddToPlaylistPathParams extends SpeakeasyBase {
    playlistId: string;
}
export declare class AddToPlaylistQueryParams extends SpeakeasyBase {
    ids?: string[];
    userId?: string;
}
export declare class AddToPlaylistSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class AddToPlaylistRequest extends SpeakeasyBase {
    pathParams: AddToPlaylistPathParams;
    queryParams: AddToPlaylistQueryParams;
    security: AddToPlaylistSecurity;
}
export declare class AddToPlaylistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
