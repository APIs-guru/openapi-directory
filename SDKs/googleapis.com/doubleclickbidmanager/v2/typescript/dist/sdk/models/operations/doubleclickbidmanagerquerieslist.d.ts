import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclickbidmanagerQueriesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DoubleclickbidmanagerQueriesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclickbidmanagerQueriesListRequest extends SpeakeasyBase {
    queryParams: DoubleclickbidmanagerQueriesListQueryParams;
    security: DoubleclickbidmanagerQueriesListSecurity;
}
export declare class DoubleclickbidmanagerQueriesListResponse extends SpeakeasyBase {
    contentType: string;
    listQueriesResponse?: shared.ListQueriesResponse;
    statusCode: number;
}
