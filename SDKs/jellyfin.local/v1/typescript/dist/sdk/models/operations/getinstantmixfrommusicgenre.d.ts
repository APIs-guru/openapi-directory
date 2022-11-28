import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInstantMixFromMusicGenrePathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetInstantMixFromMusicGenreQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    limit?: number;
    userId?: string;
}
export declare class GetInstantMixFromMusicGenreSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetInstantMixFromMusicGenreRequest extends SpeakeasyBase {
    pathParams: GetInstantMixFromMusicGenrePathParams;
    queryParams: GetInstantMixFromMusicGenreQueryParams;
    security: GetInstantMixFromMusicGenreSecurity;
}
export declare class GetInstantMixFromMusicGenreResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
