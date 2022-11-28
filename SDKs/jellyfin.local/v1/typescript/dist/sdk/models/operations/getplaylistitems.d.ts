import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlaylistItemsPathParams extends SpeakeasyBase {
    playlistId: string;
}
export declare class GetPlaylistItemsQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    limit?: number;
    startIndex?: number;
    userId: string;
}
export declare class GetPlaylistItemsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetPlaylistItemsRequest extends SpeakeasyBase {
    pathParams: GetPlaylistItemsPathParams;
    queryParams: GetPlaylistItemsQueryParams;
    security: GetPlaylistItemsSecurity;
}
export declare class GetPlaylistItemsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
