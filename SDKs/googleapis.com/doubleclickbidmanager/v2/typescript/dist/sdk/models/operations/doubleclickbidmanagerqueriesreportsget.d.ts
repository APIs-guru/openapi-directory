import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclickbidmanagerQueriesReportsGetPathParams extends SpeakeasyBase {
    queryId: string;
    reportId: string;
}
export declare class DoubleclickbidmanagerQueriesReportsGetQueryParams extends SpeakeasyBase {
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
export declare class DoubleclickbidmanagerQueriesReportsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclickbidmanagerQueriesReportsGetRequest extends SpeakeasyBase {
    pathParams: DoubleclickbidmanagerQueriesReportsGetPathParams;
    queryParams: DoubleclickbidmanagerQueriesReportsGetQueryParams;
    security: DoubleclickbidmanagerQueriesReportsGetSecurity;
}
export declare class DoubleclickbidmanagerQueriesReportsGetResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
