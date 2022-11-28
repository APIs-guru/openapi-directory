import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInstantMixFromSongPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstantMixFromSongQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    limit?: number;
    userId?: string;
}
export declare class GetInstantMixFromSongSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetInstantMixFromSongRequest extends SpeakeasyBase {
    pathParams: GetInstantMixFromSongPathParams;
    queryParams: GetInstantMixFromSongQueryParams;
    security: GetInstantMixFromSongSecurity;
}
export declare class GetInstantMixFromSongResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
