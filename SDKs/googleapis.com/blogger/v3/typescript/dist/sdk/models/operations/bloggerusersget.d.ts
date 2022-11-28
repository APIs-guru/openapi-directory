import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerUsersGetPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class BloggerUsersGetQueryParams extends SpeakeasyBase {
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
export declare class BloggerUsersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerUsersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerUsersGetSecurity extends SpeakeasyBase {
    option1?: BloggerUsersGetSecurityOption1;
    option2?: BloggerUsersGetSecurityOption2;
}
export declare class BloggerUsersGetRequest extends SpeakeasyBase {
    pathParams: BloggerUsersGetPathParams;
    queryParams: BloggerUsersGetQueryParams;
    security: BloggerUsersGetSecurity;
}
export declare class BloggerUsersGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
