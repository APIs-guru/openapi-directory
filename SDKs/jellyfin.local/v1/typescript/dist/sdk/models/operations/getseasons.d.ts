import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSeasonsPathParams extends SpeakeasyBase {
    seriesId: string;
}
export declare class GetSeasonsQueryParams extends SpeakeasyBase {
    adjacentTo?: string;
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    isMissing?: boolean;
    isSpecialSeason?: boolean;
    userId?: string;
}
export declare class GetSeasonsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSeasonsRequest extends SpeakeasyBase {
    pathParams: GetSeasonsPathParams;
    queryParams: GetSeasonsQueryParams;
    security: GetSeasonsSecurity;
}
export declare class GetSeasonsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
