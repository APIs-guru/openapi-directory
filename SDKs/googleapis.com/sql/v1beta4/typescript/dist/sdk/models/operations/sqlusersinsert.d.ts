import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlUsersInsertPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlUsersInsertQueryParams extends SpeakeasyBase {
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
export declare class SqlUsersInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlUsersInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlUsersInsertSecurity extends SpeakeasyBase {
    option1?: SqlUsersInsertSecurityOption1;
    option2?: SqlUsersInsertSecurityOption2;
}
export declare class SqlUsersInsertRequest extends SpeakeasyBase {
    pathParams: SqlUsersInsertPathParams;
    queryParams: SqlUsersInsertQueryParams;
    request?: shared.User;
    security: SqlUsersInsertSecurity;
}
export declare class SqlUsersInsertResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
