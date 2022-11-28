import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlUsersDeletePathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlUsersDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    host?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SqlUsersDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlUsersDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlUsersDeleteSecurity extends SpeakeasyBase {
    option1?: SqlUsersDeleteSecurityOption1;
    option2?: SqlUsersDeleteSecurityOption2;
}
export declare class SqlUsersDeleteRequest extends SpeakeasyBase {
    pathParams: SqlUsersDeletePathParams;
    queryParams: SqlUsersDeleteQueryParams;
    security: SqlUsersDeleteSecurity;
}
export declare class SqlUsersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
