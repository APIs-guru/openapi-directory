import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesStatsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesStatsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesStatsGetRequest extends SpeakeasyBase {
    queryParams: GamesStatsGetQueryParams;
    security: GamesStatsGetSecurity;
}
export declare class GamesStatsGetResponse extends SpeakeasyBase {
    contentType: string;
    statsResponse?: shared.StatsResponse;
    statusCode: number;
}
