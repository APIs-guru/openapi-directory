import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlUsersListPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlUsersListQueryParams extends SpeakeasyBase {
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
export declare class SqlUsersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlUsersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlUsersListSecurity extends SpeakeasyBase {
    option1?: SqlUsersListSecurityOption1;
    option2?: SqlUsersListSecurityOption2;
}
export declare class SqlUsersListRequest extends SpeakeasyBase {
    pathParams: SqlUsersListPathParams;
    queryParams: SqlUsersListQueryParams;
    security: SqlUsersListSecurity;
}
export declare class SqlUsersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    usersListResponse?: shared.UsersListResponse;
}
