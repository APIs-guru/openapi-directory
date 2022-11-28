import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclickbidmanagerQueriesGetPathParams extends SpeakeasyBase {
    queryId: string;
}
export declare class DoubleclickbidmanagerQueriesGetQueryParams extends SpeakeasyBase {
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
export declare class DoubleclickbidmanagerQueriesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclickbidmanagerQueriesGetRequest extends SpeakeasyBase {
    pathParams: DoubleclickbidmanagerQueriesGetPathParams;
    queryParams: DoubleclickbidmanagerQueriesGetQueryParams;
    security: DoubleclickbidmanagerQueriesGetSecurity;
}
export declare class DoubleclickbidmanagerQueriesGetResponse extends SpeakeasyBase {
    contentType: string;
    query?: shared.Query;
    statusCode: number;
}
