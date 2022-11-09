import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DoubleclickbidmanagerQueriesCreatequeryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    asynchronous?: boolean;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DoubleclickbidmanagerQueriesCreatequerySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclickbidmanagerQueriesCreatequeryRequest extends SpeakeasyBase {
    queryParams: DoubleclickbidmanagerQueriesCreatequeryQueryParams;
    request?: shared.Query;
    security: DoubleclickbidmanagerQueriesCreatequerySecurity;
}
export declare class DoubleclickbidmanagerQueriesCreatequeryResponse extends SpeakeasyBase {
    contentType: string;
    query?: shared.Query;
    statusCode: number;
}
