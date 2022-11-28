import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInstantMixFromMusicGenresPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstantMixFromMusicGenresQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    limit?: number;
    userId?: string;
}
export declare class GetInstantMixFromMusicGenresSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetInstantMixFromMusicGenresRequest extends SpeakeasyBase {
    pathParams: GetInstantMixFromMusicGenresPathParams;
    queryParams: GetInstantMixFromMusicGenresQueryParams;
    security: GetInstantMixFromMusicGenresSecurity;
}
export declare class GetInstantMixFromMusicGenresResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
