import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecommendedProgramsQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableTotalRecordCount?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    genreIds?: string[];
    hasAired?: boolean;
    imageTypeLimit?: number;
    isAiring?: boolean;
    isKids?: boolean;
    isMovie?: boolean;
    isNews?: boolean;
    isSeries?: boolean;
    isSports?: boolean;
    limit?: number;
    userId?: string;
}
export declare class GetRecommendedProgramsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRecommendedProgramsRequest extends SpeakeasyBase {
    queryParams: GetRecommendedProgramsQueryParams;
    security: GetRecommendedProgramsSecurity;
}
export declare class GetRecommendedProgramsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
