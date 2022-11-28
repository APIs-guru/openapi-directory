import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEpisodesPathParams extends SpeakeasyBase {
    seriesId: string;
}
export declare class GetEpisodesQueryParams extends SpeakeasyBase {
    adjacentTo?: string;
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    isMissing?: boolean;
    limit?: number;
    season?: number;
    seasonId?: string;
    sortBy?: string;
    startIndex?: number;
    startItemId?: string;
    userId?: string;
}
export declare class GetEpisodesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetEpisodesRequest extends SpeakeasyBase {
    pathParams: GetEpisodesPathParams;
    queryParams: GetEpisodesQueryParams;
    security: GetEpisodesSecurity;
}
export declare class GetEpisodesResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
