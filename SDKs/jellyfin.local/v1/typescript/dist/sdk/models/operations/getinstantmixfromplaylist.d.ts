import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInstantMixFromPlaylistPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstantMixFromPlaylistQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    limit?: number;
    userId?: string;
}
export declare class GetInstantMixFromPlaylistSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetInstantMixFromPlaylistRequest extends SpeakeasyBase {
    pathParams: GetInstantMixFromPlaylistPathParams;
    queryParams: GetInstantMixFromPlaylistQueryParams;
    security: GetInstantMixFromPlaylistSecurity;
}
export declare class GetInstantMixFromPlaylistResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
