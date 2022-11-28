import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlUsersGetPathParams extends SpeakeasyBase {
    instance: string;
    name: string;
    project: string;
}
export declare class SqlUsersGetQueryParams extends SpeakeasyBase {
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
export declare class SqlUsersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlUsersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlUsersGetSecurity extends SpeakeasyBase {
    option1?: SqlUsersGetSecurityOption1;
    option2?: SqlUsersGetSecurityOption2;
}
export declare class SqlUsersGetRequest extends SpeakeasyBase {
    pathParams: SqlUsersGetPathParams;
    queryParams: SqlUsersGetQueryParams;
    security: SqlUsersGetSecurity;
}
export declare class SqlUsersGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
