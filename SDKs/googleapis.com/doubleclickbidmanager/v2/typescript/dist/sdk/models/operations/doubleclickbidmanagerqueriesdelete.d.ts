import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclickbidmanagerQueriesDeletePathParams extends SpeakeasyBase {
    queryId: string;
}
export declare class DoubleclickbidmanagerQueriesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DoubleclickbidmanagerQueriesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclickbidmanagerQueriesDeleteRequest extends SpeakeasyBase {
    pathParams: DoubleclickbidmanagerQueriesDeletePathParams;
    queryParams: DoubleclickbidmanagerQueriesDeleteQueryParams;
    security: DoubleclickbidmanagerQueriesDeleteSecurity;
}
export declare class DoubleclickbidmanagerQueriesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
