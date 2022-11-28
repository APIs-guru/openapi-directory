import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlUsersUpdatePathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlUsersUpdateQueryParams extends SpeakeasyBase {
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
export declare class SqlUsersUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlUsersUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlUsersUpdateSecurity extends SpeakeasyBase {
    option1?: SqlUsersUpdateSecurityOption1;
    option2?: SqlUsersUpdateSecurityOption2;
}
export declare class SqlUsersUpdateRequest extends SpeakeasyBase {
    pathParams: SqlUsersUpdatePathParams;
    queryParams: SqlUsersUpdateQueryParams;
    request?: shared.User;
    security: SqlUsersUpdateSecurity;
}
export declare class SqlUsersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
