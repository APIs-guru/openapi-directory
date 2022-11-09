import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DoubleclickbidmanagerQueriesGetqueryPathParams extends SpeakeasyBase {
    queryId: string;
}
export declare class DoubleclickbidmanagerQueriesGetqueryQueryParams extends SpeakeasyBase {
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
export declare class DoubleclickbidmanagerQueriesGetquerySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclickbidmanagerQueriesGetqueryRequest extends SpeakeasyBase {
    pathParams: DoubleclickbidmanagerQueriesGetqueryPathParams;
    queryParams: DoubleclickbidmanagerQueriesGetqueryQueryParams;
    security: DoubleclickbidmanagerQueriesGetquerySecurity;
}
export declare class DoubleclickbidmanagerQueriesGetqueryResponse extends SpeakeasyBase {
    contentType: string;
    query?: shared.Query;
    statusCode: number;
}
