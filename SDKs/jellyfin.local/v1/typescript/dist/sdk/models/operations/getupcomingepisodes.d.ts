import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUpcomingEpisodesQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImges?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    limit?: number;
    parentId?: string;
    startIndex?: number;
    userId?: string;
}
export declare class GetUpcomingEpisodesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetUpcomingEpisodesRequest extends SpeakeasyBase {
    queryParams: GetUpcomingEpisodesQueryParams;
    security: GetUpcomingEpisodesSecurity;
}
export declare class GetUpcomingEpisodesResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
