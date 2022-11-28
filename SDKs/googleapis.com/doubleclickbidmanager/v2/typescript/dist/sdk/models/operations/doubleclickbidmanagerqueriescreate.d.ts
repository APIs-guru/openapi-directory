import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclickbidmanagerQueriesCreateQueryParams extends SpeakeasyBase {
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
export declare class DoubleclickbidmanagerQueriesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclickbidmanagerQueriesCreateRequest extends SpeakeasyBase {
    queryParams: DoubleclickbidmanagerQueriesCreateQueryParams;
    request?: shared.QueryInput;
    security: DoubleclickbidmanagerQueriesCreateSecurity;
}
export declare class DoubleclickbidmanagerQueriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    query?: shared.Query;
    statusCode: number;
}
