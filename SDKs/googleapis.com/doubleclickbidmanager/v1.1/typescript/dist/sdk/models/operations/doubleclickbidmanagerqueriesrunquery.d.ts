import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DoubleclickbidmanagerQueriesRunqueryPathParams extends SpeakeasyBase {
    queryId: string;
}
export declare class DoubleclickbidmanagerQueriesRunqueryQueryParams extends SpeakeasyBase {
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
export declare class DoubleclickbidmanagerQueriesRunquerySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclickbidmanagerQueriesRunqueryRequest extends SpeakeasyBase {
    pathParams: DoubleclickbidmanagerQueriesRunqueryPathParams;
    queryParams: DoubleclickbidmanagerQueriesRunqueryQueryParams;
    request?: shared.RunQueryRequest;
    security: DoubleclickbidmanagerQueriesRunquerySecurity;
}
export declare class DoubleclickbidmanagerQueriesRunqueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
