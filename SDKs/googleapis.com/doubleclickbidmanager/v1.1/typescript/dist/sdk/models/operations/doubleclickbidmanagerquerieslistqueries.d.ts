import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DoubleclickbidmanagerQueriesListqueriesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DoubleclickbidmanagerQueriesListqueriesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclickbidmanagerQueriesListqueriesRequest extends SpeakeasyBase {
    queryParams: DoubleclickbidmanagerQueriesListqueriesQueryParams;
    security: DoubleclickbidmanagerQueriesListqueriesSecurity;
}
export declare class DoubleclickbidmanagerQueriesListqueriesResponse extends SpeakeasyBase {
    contentType: string;
    listQueriesResponse?: shared.ListQueriesResponse;
    statusCode: number;
}
