import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclickbidmanagerQueriesReportsListPathParams extends SpeakeasyBase {
    queryId: string;
}
export declare class DoubleclickbidmanagerQueriesReportsListQueryParams extends SpeakeasyBase {
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
export declare class DoubleclickbidmanagerQueriesReportsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclickbidmanagerQueriesReportsListRequest extends SpeakeasyBase {
    pathParams: DoubleclickbidmanagerQueriesReportsListPathParams;
    queryParams: DoubleclickbidmanagerQueriesReportsListQueryParams;
    security: DoubleclickbidmanagerQueriesReportsListSecurity;
}
export declare class DoubleclickbidmanagerQueriesReportsListResponse extends SpeakeasyBase {
    contentType: string;
    listReportsResponse?: shared.ListReportsResponse;
    statusCode: number;
}
