import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclickbidmanagerQueriesRunPathParams extends SpeakeasyBase {
    queryId: string;
}
export declare class DoubleclickbidmanagerQueriesRunQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    synchronous?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DoubleclickbidmanagerQueriesRunSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclickbidmanagerQueriesRunRequest extends SpeakeasyBase {
    pathParams: DoubleclickbidmanagerQueriesRunPathParams;
    queryParams: DoubleclickbidmanagerQueriesRunQueryParams;
    request?: shared.RunQueryRequest;
    security: DoubleclickbidmanagerQueriesRunSecurity;
}
export declare class DoubleclickbidmanagerQueriesRunResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
