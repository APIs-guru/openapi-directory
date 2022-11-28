import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GamesMetagameListCategoriesByPlayerCollectionEnum {
    CollectionUnspecified = "COLLECTION_UNSPECIFIED",
    All = "ALL"
}
export declare class GamesMetagameListCategoriesByPlayerPathParams extends SpeakeasyBase {
    collection: GamesMetagameListCategoriesByPlayerCollectionEnum;
    playerId: string;
}
export declare class GamesMetagameListCategoriesByPlayerQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesMetagameListCategoriesByPlayerSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesMetagameListCategoriesByPlayerRequest extends SpeakeasyBase {
    pathParams: GamesMetagameListCategoriesByPlayerPathParams;
    queryParams: GamesMetagameListCategoriesByPlayerQueryParams;
    security: GamesMetagameListCategoriesByPlayerSecurity;
}
export declare class GamesMetagameListCategoriesByPlayerResponse extends SpeakeasyBase {
    categoryListResponse?: shared.CategoryListResponse;
    contentType: string;
    statusCode: number;
}
