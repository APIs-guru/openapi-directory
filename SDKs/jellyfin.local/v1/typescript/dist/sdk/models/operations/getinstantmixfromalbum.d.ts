import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInstantMixFromAlbumPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstantMixFromAlbumQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    limit?: number;
    userId?: string;
}
export declare class GetInstantMixFromAlbumSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetInstantMixFromAlbumRequest extends SpeakeasyBase {
    pathParams: GetInstantMixFromAlbumPathParams;
    queryParams: GetInstantMixFromAlbumQueryParams;
    security: GetInstantMixFromAlbumSecurity;
}
export declare class GetInstantMixFromAlbumResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
