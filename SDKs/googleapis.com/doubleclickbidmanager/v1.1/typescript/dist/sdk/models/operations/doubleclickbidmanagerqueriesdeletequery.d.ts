import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclickbidmanagerQueriesDeletequeryPathParams extends SpeakeasyBase {
    queryId: string;
}
export declare class DoubleclickbidmanagerQueriesDeletequeryQueryParams extends SpeakeasyBase {
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
export declare class DoubleclickbidmanagerQueriesDeletequerySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclickbidmanagerQueriesDeletequeryRequest extends SpeakeasyBase {
    pathParams: DoubleclickbidmanagerQueriesDeletequeryPathParams;
    queryParams: DoubleclickbidmanagerQueriesDeletequeryQueryParams;
    security: DoubleclickbidmanagerQueriesDeletequerySecurity;
}
export declare class DoubleclickbidmanagerQueriesDeletequeryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
